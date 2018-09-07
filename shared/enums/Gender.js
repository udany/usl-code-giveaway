import Enum from '../base/Enum';

/**
 * @name Gender
 * @property {number} value
 * @property {string} label
 */

export default new Enum({
	Male: {value: 1, label: 'Masculino'},
	Female: {value: 2, label: 'Feminino'},
	Other: {value: 4, label: 'Outro'},
});