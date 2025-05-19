import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const invisibleStyle = vscode.window.createTextEditorDecorationType({
    color: 'rgba(0,0,0,0)', // komplett transparent
    backgroundColor: 'rgba(0,0,0,0)', // kein Highlight
    dark: {
      color: 'rgba(0,0,0,0)',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    light: {
      color: 'rgba(0,0,0,0)',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    textDecoration: 'none; border: none;' // kein Cursor-Effekt
  });

  const makeInvisibleCommand = vscode.commands.registerCommand('makeInvisible', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const fullRange = new vscode.Range(
      editor.document.positionAt(0),
      editor.document.positionAt(editor.document.getText().length)
    );

    editor.setDecorations(invisibleStyle, [fullRange]);
  });

  context.subscriptions.push(makeInvisibleCommand);
}

export function deactivate() {}
