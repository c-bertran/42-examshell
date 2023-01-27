import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import yaml from '@rollup/plugin-yaml';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import { version } from './package.json';

export default {
	input: 'srcs/index.ts',
	watch: {
		clearScreen: false,
		buildDelay: 100
	},
	output: [
		{
			entryFileNames: '[name].[format].js',
			format: 'cjs',
			dir: 'dist'
		}
	],
	plugins: [
		replace({
			preventAssignment: true,
			values: {
				'process.env.version': JSON.stringify(version)
			}
		}),
		json(),
		yaml(),
		typescript({
			resolveJsonModule: true
		}),
		terser(),
		copy({
			targets: [
				{ src: 'srcs/shell/*', dest: 'dist/data/shell' },
				{ src: 'srcs/exams/!(*.ts)', dest: 'dist/data/exams' }
			]
		})
	]
};
