import md5 from 'md5';

/**
 * @name AccessKeyController
 */
export default {
	getCurrentHash(currentTime) {
		currentTime = Math.floor(currentTime/1000/15);

		let currentHash = md5(currentTime);
		currentHash = currentHash.substr(0,6);

		return currentHash;
	},
	getCurrentStartTime(currentTime) {
		return Math.floor(currentTime/1000/15)*1000*15;
	}
};