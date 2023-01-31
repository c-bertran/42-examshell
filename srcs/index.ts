/**
 * examshell
 * Copyright (C) 2022 - 2023 Clément Bertrand (https://github.com/c-bertran/examshell)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

import 'modules/fspatch';
import { mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { argv, execPath, exit } from 'process';
import main from 'modules/main';
import checklib from 'modules/checklib';
import checkUpdate from 'modules/checkUpdate';
import customExamList from 'modules/customExamList';
import uncaughtException from 'modules/uncaughtException';

(async () => {
	let instance: main;
	try {
		if (argv[2] === '--custom' || argv[2] === '-C') // create dir for custom exam
			await mkdir(resolve(dirname(execPath), 'exams'), { recursive: true }); 
		customExamList();
		await checkUpdate();
		await checklib();
		instance = new main();
		await instance.setLang();
		await instance.setOptionsAndExam();
		await instance.startExamen();
		instance.manageClock();
		instance.startPrompt();
	} catch {
		exit(127);
	}
})();

process.on('uncaughtException', (err) => uncaughtException(err));
process.on('uncaughtExceptionMonitor', (err) => uncaughtException(err));
process.on('unhandledRejection', (err: Error) => uncaughtException(err));
