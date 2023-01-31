
import { existsSync, readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { examDefinition } from 'exams/interface';
import format from './format';
import error from './error';

const __exams__: examDefinition[] = [];

const checkObj = (obj: any): string[] => {
	const errors: string[] = [];
	const is = (s: string, o: any = obj) => {
		if (!Object.prototype.hasOwnProperty.call(o, s))
			errors.push(`${s} is undefined`);
	};
	is('id');
	is('dirName');
	is('name');
	if (typeof obj.name !== 'object')
		errors.push('name is not an object');
	else {
		is('fr_FR', obj.name);
		is('en_US', obj.name);
	}
	is('goal');
	is('time');
	is('exercices');
	if (!obj.exercices.length)
		errors.push('no exercices');
	return errors;
};

export default (): examDefinition[] => {
	if (!__exams__.length && existsSync(resolve(__dirname, 'exams'))) {
		const dirs = readdirSync(resolve(__dirname, 'exams'), { encoding: 'utf-8', withFileTypes: true });
		for (const dir of dirs) {
			const __path = resolve(__dirname, 'exams', dir.name, 'definition.json');

			if (dir.isDirectory() && existsSync(__path)) {
				const __json = JSON.parse(readFileSync(__path) as any);
				const errors = checkObj(__json);
				if (errors.length) {
					error(10, { exit: true, data: errors.join('\n')});
					throw new Error('exam_error');
				}
				__json.custom = true;
				__exams__.push(__json);
			} 
		}
	}
	return __exams__;
};
