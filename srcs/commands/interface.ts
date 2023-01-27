import { lang } from 'langs/index';

export interface command {
	name: string;
	description: string;
	exec: (commands: string[], lang: lang, ...args: any[]) => Promise<void> | void
}
