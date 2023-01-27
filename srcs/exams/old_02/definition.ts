import { examDefinition } from '../interface';

export default {
	id: 'old_exam_02',
	name: {
		'en_US': 'Old exam 02',
		'fr_FR': 'Ancien examen 02'
	},
	goal: 100,
	time: '3h',
	exercices: [
		[
			{
				id: 'union',
				name: {
					'en_US': 'union',
					'fr_FR': 'union'
				},
				exponent: 2,
				trace: false,
				allowed_functions: ['write'],
				moulinette: true,
				leaks: true,
				copy: {
					check: ['union.c']
				}
			},
			{
				id: 'inter',
				name: {
					'en_US': 'inter',
					'fr_FR': 'inter'
				},
				exponent: 2,
				trace: false,
				allowed_functions: ['write'],
				moulinette: true,
				leaks: true,
				copy: {
					check: ['inter.c']
				}
			}
		],
		[
			{
				id: 'get_next_line',
				name: {
					'en_US': 'get_next_line',
					'fr_FR': 'get_next_line'
				},
				exponent: 2,
				trace: false,
				allowed_functions: ['read', 'free', 'malloc'],
				moulinette: true,
				leaks: true,
				copy: {
					user: ['test.sh'],
					check: ['get_next_line.c', 'get_next_line.h', 'main.c', 'files']
				}
			},
			{
				id: 'ft_printf',
				name: {
					'en_US': 'ft_printf',
					'fr_FR': 'ft_printf'
				},
				exponent: 2,
				trace: false,
				allowed_functions: ['malloc', 'free', 'write', 'va_start', 'va_arg', 'va_copy', 'va_end'],
				moulinette: true,
				leaks: true,
				copy: {
					check: ['main.c']
				}
			}
		]
	]
} as examDefinition;
