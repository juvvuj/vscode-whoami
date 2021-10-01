import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-whoami.echoName', () => {
        vscode.window.showInformationMessage('Hello World from vscode-whoami!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
