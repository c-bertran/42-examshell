import { randomBytes } from 'crypto';
import { copyFileSync, mkdirSync, rmSync } from 'fs';
import { rm } from 'fs/promises';
import { homedir, tmpdir } from 'os';
import { resolve } from 'path';
import { exec } from 'child_process';

import format from 'modules/format';
import i18n, { lang } from 'langs/index';
import oldTwo from './old_02/definition';
import oldThree from './old_03/definition';
import { examDefinition } from './interface';

export const examList = [
	oldTwo,
	oldThree
] as examDefinition[];

export default class {
	private examId: number;
	private lang: lang;

	public generateId: string;
	
	public git: {
		main: string;
		temp: string;
		render: string;
		subject: string;
	};

	constructor(id: string, lang: lang) {
		this.lang = lang;
		this.examId = examList.findIndex((e) => e.id === id);
		if (this.examId === -1)
			throw new Error(`Exam ${id} is undefined`);
		this.generateId = randomBytes(Math.ceil(16 / 2)).toString('hex').slice(0, 16);

		const temp = resolve(homedir(), 'examshell', this.generateId);
		this.git = {
			main: temp,
			temp: resolve(tmpdir(), 'examshell'),
			render: resolve(temp, i18n('git.render', lang) as string),
			subject: resolve(temp, i18n('git.subject', lang) as string),
		};
		try {
			rmSync(this.git.temp, { recursive: true, force: true });
		} catch (e: any) {
			throw new Error(e);
		}
	}

	init(): void {
		try {
			mkdirSync(this.git.temp, { recursive: true });
			mkdirSync(this.git.main, { recursive: true });
			mkdirSync(this.git.render, { recursive: true });
			mkdirSync(this.git.subject, { recursive: true });
			copyFileSync(
				resolve(__dirname, 'data', 'shell', 'init.bash'),
				resolve(this.git.render, 'init.bash')
			);
		} catch (e) {
			throw new Error('mkdirSync or copyFileSync failed');
		}
	}

	start(): Promise<void> {
		return new Promise((res, rej) => {
			const bash = exec('bash init.bash', {
				cwd: this.git.render,
				shell: '/bin/bash',
				windowsHide: true,
			});
			if (bash && bash.stderr) {
				bash.stderr.on('data', () => {
					rej(`${format.foreground.normal.red}${i18n('error.gitInit', this.lang)}${format.format.reset}`);
				});
				bash.on('error', (e) => {
					rej(`${format.foreground.normal.red}${e.message}${format.format.reset}`);
				});
				bash.on('exit', (code) => {
					rm(resolve(this.git.render, 'init.bash'), { force: true });
					if (code === 0)
						res();
					else
						rej(`${format.foreground.normal.red}${i18n('error.exec', this.lang)} ${format.foreground.normal.magenta}${code}${format.format.reset}`);
				});
			} else
				rej('child exec failed');
		});
	}

	stop(): Promise<void> {
		return new Promise((res) => {
			rm(this.git.temp, { recursive: true, force: true })
				.then(() => res())
				.catch(() => res());
		});
	}
}
