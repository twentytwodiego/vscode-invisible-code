# Invisible Code – VS Code Extension

**Invisible Code** is a minimalist Visual Studio Code extension designed to support blind coding practice.

## 🎯 Purpose

This extension allows developers to train writing code without relying on visual feedback.  
It hides all editor content by matching the text color to the background, making the code invisible even during selection or input.

## ✨ How it works

Using VS Code's `TextEditorDecorationType`, the extension applies:

- Text color set to `editor.background` (fully invisible)
- No line highlighting or selection visibility
- Cursor line remains hidden

Note: This extension does **not** modify or delete any code – all content remains intact.

## 🛠 Usage

1. Install the extension
2. Open any text/code file
3. Run the command:
```bash
Ctrl + Shift + P → Make Code Invisible
```

To restore visibility, simply reload the window (`Ctrl + Shift + P → Reload Window`) or disable the extension.

## 📌 Disclaimer

This extension is intended for **training purposes only**, helping developers improve their ability to write code without visual dependency.

---

© 2025 Diego Vignuda – *Invisible Code for focused, distraction-free developer training.*
