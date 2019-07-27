'use strict';
import * as vscode from 'vscode';
import { PluginListProvider } from './PluginListProvider';
import { DepNodeProvider, Dependency } from './nodeDependencies';

export function activate(context: vscode.ExtensionContext) {
	//@ts-ignore
	const pluginsListProider = new DepNodeProvider(vscode.workspace.rootPath);
	vscode.window.registerTreeDataProvider('remixPluginMngr', pluginsListProider);
	vscode.commands.registerCommand('pluginsListProider.refreshEntry', () =>
		pluginsListProider.refresh()
	);
	vscode.commands.registerCommand('extension.openPackageOnNpm', moduleName =>
		vscode.commands.executeCommand(
			'vscode.open',
			vscode.Uri.parse(`https://www.npmjs.com/package/${moduleName}`)
		)
	);
	vscode.commands.registerCommand('remixPluginMngr.addEntry', () =>
		vscode.window.showInformationMessage(`Successfully called add entry.`)
	);
	vscode.commands.registerCommand('remixPluginMngr.editEntry', (node: Dependency) =>
		vscode.window.showInformationMessage(`Successfully called edit entry on ${node.label}.`)
	);
	vscode.commands.registerCommand('remixPluginMngr.deleteEntry', (node: Dependency) =>
		vscode.window.showInformationMessage(`Successfully called delete entry on ${node.label}.`)
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
