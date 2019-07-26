import * as vscode from 'vscode';
import { PluginListProvider } from './PluginListProvider';

export function activate(context: vscode.ExtensionContext) {
	const pluginsListProider = new PluginListProvider(vscode.workspace.rootPath);
	vscode.window.registerTreeDataProvider('remixPluginMngr', pluginsListProider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
