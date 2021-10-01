import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-whoami.echoName', async () => {
        const name = await vscode.window.showInputBox({
            title: 'Full Name',
            prompt: 'Please enter your full name'
        });
        if (name) {
            vscode.window.showInformationMessage(`Hello ${name}!`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
