import { rm } from 'fs/promises';
import { exit } from 'process';
import { command } from '../interface';

export default {
	name: 'finish',
	description: {
		'en_US': 'Terminate exam and leaves the program',
		'fr_FR': 'Termine l\'examen et quitte le programme'
	},
	exec: async (_command, _lang, gitTemp: string) => {
		await rm(gitTemp, { recursive: true, force: true });
		exit(0);
	}
} as command;
