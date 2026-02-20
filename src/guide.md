# User Guide 
## Setup
Click the **Settings ⚙️** icon in the header.
Select **"Get API Key"** or visit the [Groq Console](https://console.groq.com/keys).
Create a key, paste your key here, and click **Save**.
Create a folder, hover over it, and click **+** for a new note.


//2


**# Text**: Max size header (H1)

**## Text**: H2

**### Text**: H3 (size decreases with each #)

**\*\*text\*\***: Bold

**\*text\***: Italic

**++text++**: Underline

**~~text~~**: Strikethrough 

```code block```: Anything inside this remains exactly as typed.

```==text==```: Yellow highlight (double equal signs on both sides)
```color==text==```: Custom color highlight (example: `green==text==`)

```red[] / blue[] / green[] / purple[] / orange[] / gray[]```: For colored text




```$ ... $```: Inline math
```$$ ... $$```: Block math

**---**: New page / Page break

```\<br>```: New line inside tables
```\\\\```: New line in math blocks
```//x```: Injects **X** lines of blank space (e.g., `//3` for 3 blank lines). Please press "Enter" twice after using `//x`; otherwise, subsequent code may break.

**Example:** 
line 1
//3

line 2

```center[]```: Center align content

```right[], left[]```: Right or left align content

```.....```: Custom alignment; dots are invisible in the final PDF.
.................Example



```red[] / blue[] / green[] / purple[] / orange[] / gray[]```: Color containers


---

[[clickable keyword]](explanation of that keyword) : Use this to add information that you don't want to add in the main content. This appears in the appendix; click "back" to return to the main content. Works in Exported PDF.

**Picture Block**: ![Image|300|Begula](BEGULA_IMG)
Here, "Image" is the default name of the file, "300" is the adjustable size, and "Begula" is the Figure name. Ignore the content inside the parentheses `(........)`.

**Reverse Sync**: Click anywhere in the PDF Preview to jump to the corresponding section in the editor.

**AI Refine**: Select a specific area before using tools and AI refine. Refining the entire content at once may lead to data loss due to token limitations. There are two modes: **Custom Refine** (works on custom instruction, e.g., change tone to academic) and **Enhance Syntax** (fix broken math).

**Red Line in PDF Preview**: This indicates where a physical page ends.

**Break math block**: If a math block is too long and crosses the red page break line, it will push the entire document downward. This creates a large blank space in the printed document and looks unprofessional. Use the "Break math block" tool in the tools section to fix this.

**Cover Page**: A demo cover page is provided. You can edit it or create a new one in a blank note and save it as your own preset.