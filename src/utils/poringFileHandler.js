import localforage from 'localforage';
import CryptoJS from 'crypto-js';
import { saveAs } from 'file-saver';

const PORING_SECRET_KEY = "PORING_SECRET_KEY"; // In a real app, this should be user-provided or more secure

// --- Helper Functions ---

/**
 * Converts a Blob to a Base64 Data URL string.
 * @param {Blob} blob 
 * @returns {Promise<string>}
 */
const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

/**
 * Converts a Base64 Data URL string back into a Blob.
 * @param {string} base64 
 * @returns {Promise<Blob>}
 */
const base64ToBlob = async (base64) => {
    const response = await fetch(base64);
    return await response.blob();
};

// --- Export Logic ---

/**
 * Exports a note with its images as an encrypted .poring file.
 * @param {string} noteTitle 
 * @param {string} markdownContent 
 */
export const exportPoringFile = async (noteTitle, markdownContent) => {
    try {
        const assetMap = {};

        // 1. Find all image references in the markdown
        // Matches ![...](key) where key does NOT start with http
        // We assume keys are simple strings, not containing parenthesis unless escaped (simplified regex)
        // Standard markdown image: ![alt](url)
        const imageRegex = /!\[.*?\]\((?!http)(.*?)\)/g;
        let match;

        // We use a Set to avoid fetching the same image multiple times
        const keysToFetch = new Set();
        while ((match = imageRegex.exec(markdownContent)) !== null) {
            keysToFetch.add(match[1]);
        }

        // 2. Fetch Blobs and convert to Base64
        for (const key of keysToFetch) {
            const blob = await localforage.getItem(key);
            if (blob) {
                assetMap[key] = await blobToBase64(blob);
            } else {
                console.warn(`Image key not found in storage: ${key}`);
            }
        }

        // 3. Create Master JSON Object
        const poringData = {
            meta: { version: "1.0", type: "poring_notebook_export" },
            title: noteTitle,
            markdown: markdownContent,
            assets: assetMap
        };

        // 4. Encrypt
        const jsonString = JSON.stringify(poringData);
        const encrypted = CryptoJS.AES.encrypt(jsonString, PORING_SECRET_KEY).toString();

        // 5. Trigger Download
        const blob = new Blob([encrypted], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `${noteTitle}.poring`);

        return true;
    } catch (error) {
        console.error("Export failed:", error);
        alert("Export failed: " + error.message);
        return false;
    }
};

// --- Import Logic ---

/**
 * Imports a .poring file, restores images, and returns the note data.
 * @param {File} file 
 * @returns {Promise<{title: string, content: string}|null>}
 */
export const importPoringFile = async (file) => {
    try {
        // 1. Read file content
        const encryptedText = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsText(file);
        });

        // 2. Decrypt
        let jsonString;
        try {
            const bytes = CryptoJS.AES.decrypt(encryptedText, PORING_SECRET_KEY);
            jsonString = bytes.toString(CryptoJS.enc.Utf8);
            if (!jsonString) throw new Error("Decryption produced empty result");
        } catch (e) {
            throw new Error("Invalid or corrupted .poring file (Decryption failed).");
        }

        // 3. Parse JSON
        const poringData = JSON.parse(jsonString);

        // Basic validation
        if (!poringData.meta || !poringData.markdown) {
            throw new Error("Invalid file format: Missing metadata or content.");
        }

        // 4. Restore Assets (Images)
        if (poringData.assets) {
            for (const [key, base64] of Object.entries(poringData.assets)) {
                try {
                    const blob = await base64ToBlob(base64);
                    await localforage.setItem(key, blob);
                } catch (err) {
                    console.error(`Failed to restore image ${key}:`, err);
                }
            }
        }

        // 5. Return Note Data
        return {
            title: poringData.title || "Imported Note",
            content: poringData.markdown
        };

    } catch (error) {
        console.error("Import failed:", error);
        alert("Import failed: " + error.message);
        return null;
    }
};
