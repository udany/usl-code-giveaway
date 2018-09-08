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
	getUser(userId) {
		return users.find(x => x.id === userId);
	},
	assignCodeToUser(userId) {
		let user = users.find(x => x.id === userId);

		if (!user) {
			user = {id: userId};
			users.push(user);
		}

		if (!user.code) {
			user.code = unassignedCodes[0].code;
			unassignedCodes.splice(0, 1);
		}

		userManager.saveFile();

		return user;
	},
	allCodes() {
		return codes;
	},
	unassignedCodes() {
		return unassignedCodes;
	},
}