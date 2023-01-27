import { command } from '../interface';

export default {
	name: 'grademe',
	description: {
		'en_US': 'Grade current exercice',
		'fr_FR': 'Noter l\'exercice en cours'
	},
	exec: (command, lang) => {
		console.log(command, lang);
	}
} as command;
