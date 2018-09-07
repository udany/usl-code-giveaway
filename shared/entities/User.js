import Entity from '../base/Entity';
import Gender from '../enums/Gender';

/**
 * @name User
 * @property {number} id
 *
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {string} passwordRaw
 *
 * @property {Gender} gender
 * @property {Gender[]} genderPreference
 * @property {string} neighborhood
 * @property {string} phone
 * @property {Date} birthday
 *
 * @property {string} description
 *
 * @property {string} matchMessage
 */
export class User extends Entity {}

User.Register();
User.Attributes = [
    new Entity.Attributes.Integer('id'),

    new Entity.Attributes.String('name'),
	new Entity.Attributes.String('email'),
	new Entity.Attributes.String('password'),
	new Entity.Attributes.String('passwordRaw'),

	new Entity.Attributes.Enum('gender', Gender),
	new Entity.Attributes.Flags('genderPreference', Gender),
	new Entity.Attributes.String('neighborhood'),
	new Entity.Attributes.String('phone'),
	new Entity.Attributes.Date('birthday'),

	new Entity.Attributes.String('description'),

	new Entity.Attributes.String('matchMessage')
];

export default User;
