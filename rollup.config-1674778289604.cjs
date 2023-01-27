'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var terser = require('@rollup/plugin-terser');
var typescript = require('@rollup/plugin-typescript');
var json = require('@rollup/plugin-json');
var yaml = require('@rollup/plugin-yaml');
var replace = require('@rollup/plugin-replace');
var copy = require('rollup-plugin-copy');
var package_json = require('./package.json');

var rollup_config = {
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
				'process.env.version': JSON.stringify(package_json.version)
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

exports.default = rollup_config;
