import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

const dataFolder = path.resolve('./data');

const codeListFile = path.resolve(dataFolder, 'codes.csv');
let codes = [];

/**
 * @name CodeController
 */
export default {
	getUnassignedCode() {

	},
	getUserCode() {

	},
	assignCodeToUser() {

	},
	async loadCodes() {
		codes = await csv().fromFile(codeListFile);
	},
	allCodes() {
		return codes;
	}
}