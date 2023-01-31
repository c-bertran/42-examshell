import { exec } from 'child_process';
import { platform, tmpdir } from 'os';
import { exit, stdout } from 'process';
import prompts from 'prompts';

const error = (error = '', code = 127): void => {
	console.error(`[Error ${code}] ${error}`);
	exit(code);
};

const child = (command: string, ispipe = false): Promise<unknown> => {
	return new Promise((resolve, reject) => {
		const newChild = exec(command, {
			cwd: tmpdir(),
			shell: '/bin/bash',
			windowsHide: true,
			timeout: 15000
		}, (err) => {
			if (err)
				reject(Number(127));
		}).on('close', (code) => {
			if (code === 0)
				resolve(Number(0));
			reject(Number(code));
		});
		if (ispipe === true)
			newChild.stdout?.pipe(stdout);
	});
};

const install = async (resolve: (value: unknown) => void) => {
	await prompts({
		type: 'password',
		name: 'password',
		message: 'Password'
	}, {
		onCancel: () => error('The prompt was cancelled. Please install `git`, `clang` and `valgrind` manually, or restart this application for retry', 122),
	})
		.then((answer: { password: string }) => {
			child(`echo "${answer.password}" | sudo -k -S apt-get install -y valgrind git clang`, true)
				.then(() => {
					console.log('Installation success, start program');
					resolve(true);
				})
				.catch(() => {
					console.error('User password is incorrect');
					install(resolve);
				});
		})
		.catch((error) => {
			if (error.isTtyError)
				console.error('Prompt couldn\'t be rendered in the current environment');
			else
				console.error(error.message);
			exit(-1);
		});
};

const handleMacOS = async (resolve: (value: unknown) => void) => {
	await prompts({
		type: 'confirm',
		name: 'bypass',
		message: 'Do you want to skip this step (e.g. a false negative) ?',
		initial: false
	},
	{
		onCancel: () => true
	})
		.then((answer: { bypass: boolean }) => {
			if (answer.bypass)
				return error('Please install `git`, `clang` and `valgrind` manually', 121);
			resolve(null);
		})
		.catch((error) => {
			if (error.isTtyError)
				console.error('Prompt couldn\'t be rendered in the current environment');
			else
				console.error(error.message);
			exit(-1);
		});
};

export default (): Promise<unknown> => {
	if (platform() !== 'linux' && platform() !== 'darwin')
		error(`${platform()}: unsupported plateform, please use linux or darwin`, 120);
	return new Promise((res) => {
		Promise.all([
			child('valgrind --version'),
			child('clang --version'),
			child('git --version'),
		])
			.then(() => res(true)).catch(() => {
				if (platform() !== 'linux') {
					console.error('Under MacOS, automatic installation is unavailable');
					handleMacOS(res);
				} else {
					console.error('Necessary librarie(s) not found, start installation');
					install(res);
				}
			});
	});
};
