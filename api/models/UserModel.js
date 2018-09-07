import {DatabaseField, DatabaseModel} from '../js/DatabaseModel';
import User from '../../shared/entities/User';
import { DatabaseRelationshipOneToMany } from '../js/DatabaseRelationship';

class UserModel extends DatabaseModel {}

UserModel.config({
	table: 'user',
	entity: User,

	fields: [
		new DatabaseField({name: 'id', type: 'int', length: 11})
			.setAutoIncrement(true).setPrimaryKey(true),

		new DatabaseField({name: 'name', type: 'varchar', length: 256}).setDefault(''),
		new DatabaseField({name: 'email', type: 'varchar', length: 256}).setDefault(''),
		new DatabaseField({name: 'password', type: 'varchar', length: 64}).setDefault(''),

		new DatabaseField({name: 'major', type: 'tinyint', length: 2}),
		new DatabaseField({name: 'semester', type: 'char', length: 6}),

		new DatabaseField({name: 'gender', type: 'tinyint', length: 2}),
		new DatabaseField({name: 'enrolmentStatus', type: 'tinyint', length: 2}),
		new DatabaseField({name: 'educationLevel', type: 'tinyint', length: 2}),
		new DatabaseField({name: 'sexualOrientation', type: 'tinyint', length: 2}),
		new DatabaseField({name: 'genderPreference', type: 'tinyint', length: 2}),

		new DatabaseField({name: 'neighborhood', type: 'varchar', length: 128}).setDefault(''),
		new DatabaseField({name: 'phone', type: 'varchar', length: 13}).setDefault(''),
		new DatabaseField({name: 'birthday', type: 'datetime'}),

		new DatabaseField({name: 'description', type: 'text'}).setDefault(''),
		new DatabaseField({name: 'matchMessage', type: 'text'}).setDefault(''),
	]
});

export default UserModel;