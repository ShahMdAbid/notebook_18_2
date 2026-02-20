center[gray[# Poring Notebook]]
Poring Notebook was developed to bridge the gap between standard word processors that struggle with mathematics and professional typesetting environments like Overleaf that require a $21 monthly subscription for AI support. It is a local-first academic writing tool (no server, runs privately on your device) designed to help students and researchers easily transform scattered notes, AI-generated content, and complex formulas into clean, print-ready PDFs. By combining the simplicity of Markdown shortcuts with the rendering of KaTeX, the editor lets you write naturally without fighting strict formatting rules. 
Your notes and images stay saved even if you refresh the page. However, please do not clear your browser data or use Incognito mode while taking notes, this will delete your work. To safely back up your documents so you can re-upload and edit them later, always export your work as a .poring file.

**Feedback & Updates**
As this tool is actively being developed, you might still encounter few bugs. If you find any issues, <br> please report them to: shahmdabid921@gmail.com
Latest update of this notebook: https://notebook18-2.netlify.app/


## Setup
Click the **Settings ⚙️** icon in the header.
Select **"Get API Key"** or visit the [Groq Console](https://console.groq.com/keys).
Create a key, paste your key here, and click **Save**.
Create a folder, hover over it, and click **+** for a new note or just click "+Note".


//1

**Standard Markdown & Shortcuts** for a fast, clean editing experience:
```codeblock```: Anything inside this remains exactly as typed.

# Max size header (H1)

## H2

### H3 (size decreases with each #)

```**text**```: Bold

```*text*```: Italic

```++text++```: Underline

```~~text~~```: Strikethrough 



```==text==```: Yellow highlight (double equal signs on both sides)
```color==text==```: Custom color highlight (example: `green==text==`)

```red[] / blue[] / green[] / purple[] / orange[] / gray[]```: For colored text




```$ ... $```: Inline math
```$$ ... $$```: Block math

```---```: New page / Page break

```<br>```: New line inside tables
```\\```: New line in math blocks
```//x```: Injects **X** lines of blank space (e.g., `//2` for 2 blank lines). Please press "Enter" twice after using `//x`; otherwise, subsequent code may break.

**Example:** 
line 1
//2

line 2


```center[]```: Center align content

```right[], left[]```: Right or left align content





```red[] / blue[] / green[] / purple[] / orange[] / gray[]```: Color containers


[[clickable keyword]](explanation of that keyword) : Use this to add information that you don't want to add in the main content. This appears in the appendix; click "back" to return to the main content. Works in Exported PDF.

**Picture Block**: You can either insert or just paste images in your note. 

**Syntax**: `![Image|Width|Caption](Source)`

**Example**:![Image|300|Begula](BEGULA_IMG)

Width: The display size (e.g., `300`).
Caption: The figure label displayed beneath the image (e.g., "Begula").
Note: The content inside the parentheses `(...)` is the system file reference and should not be modified.

**Reverse Sync**: Click anywhere in the PDF Preview to jump to the corresponding section in the editor.

**AI Refine**: Select a specific area before using tools and AI refine. Refining the entire content at once may lead to data loss due to token limitations. There are two modes: **Custom Refine** (works on custom instruction, e.g., change tone to academic) and **Enhance Syntax** (fix broken math).
**Undo**:  Once you refine with AI, undo button will appear besie the refine button.
**Red Line in PDF Preview**: This indicates where a physical page ends.

**Break math block**: If a math block is too long and crosses the red page break line, it will push the entire document downward. This creates a large blank space in the printed document and looks unprofessional. Use the "Break math block" tool in the tools section to fix this.

**Cover Page**: A demo cover page is provided. You can edit it or create a new one in a blank note and save it as your own preset.

**.poring file**: Encoded version of your note with images. Share your assignment with your friends & tell them to import it using the upload icon of left sidebar to edit .