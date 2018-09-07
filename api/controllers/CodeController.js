import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

const dataFolder = path.resolve('./data');

const codeListFile = path.resolve(dataFolder, 'codes.csv');
let codes = [], unassignedCodes = [];

const usersFile = path.resolve(dataFolder, 'users.json');
let users = [];

const userManager = {
	start() {
		if (!fs.existsSync(usersFile)) {
			this.createFile();
		} else {
			this.loadFile();
		}
	},
	createFile() {
		fs.writeFileSync(usersFile, '[]');
	},
	loadFile() {
		let data = fs.readFileSync(usersFile);
		users = JSON.parse(data);
	},
	saveFile() {
		fs.writeFileSync(usersFile, JSON.stringify(users));
	}
};

const codeManager = {
	start() {
		userManager.start();
		this.loadCodes();
	},
	async loadCodes() {
		codes = await csv().fromFile(codeListFile);
		unassignedCodes = codes.filter(code => !users.find(user => user.code === code.code));
	}
};

/**
 * @name CodeController
 */
export default {
	start() {
		codeManager.start();
	},
	getUserCode() {

	},
	assignCodeToUser() {

	},
	allCodes() {
		return codes;
	},
	unassignedCodes() {
		return unassignedCodes;
	},
}