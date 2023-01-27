import format from 'modules/format';
import i18n from 'langs/index';
import { command } from '../interface';

export default {
	name: 'help',
	description: 'Print help',
	exec: (commands, lang) => {
		switch (commands[1]) {
		case 'status':
			console.log(`${format.foreground.light.blue}status${format.format.reset} - ${i18n('help.status', lang)}`);
			break;
		case 'grademe':
			console.log(`${format.foreground.light.blue}grademe${format.format.reset} - ${i18n('help.grademe', lang)}`);
			break;
		case 'finish':
			console.log(`${format.foreground.light.blue}finish${format.format.reset} - ${i18n('help.finish', lang)}`);
			break;
		case 'help':
		case undefined:
			console.log(`${format.foreground.light.blue}help${format.format.reset} - ${i18n('help.help', lang)} (${format.foreground.light.blue}help${format.format.reset} [command])`);
			break;
		default:
			console.log(`${format.foreground.light.blue}help ${format.format.reset} - ${format.foreground.light.red}${commands[1]}${format.format.reset} ${i18n('error.command', lang)}`);
		}
	}
} as command;
