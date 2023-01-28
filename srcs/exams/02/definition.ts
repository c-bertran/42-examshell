import { examDefinition } from '../interface';

export default {
	id: 'exam_02',
	dirName: 'exam_02',
	name: {
		'en_US': 'Exan 02',
		'fr_FR': 'Examen 02'
	},
	goal: 100,
	time: '3h',
	exercices: [
		[
			{
				id: 'first_word',
				dir: 'part_0',
				name: {
					'en_US': 'first_word',
					'fr_FR': 'first_word'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['first_word.c']
				}
			},
			{
				id: 'fizzbuzz',
				dir: 'part_0',
				name: {
					'en_US': 'fizzbuzz',
					'fr_FR': 'fizzbuzz'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['fizzbuzz.c']
				}
			},
			{
				id: 'ft_putstr',
				dir: 'part_0',
				name: {
					'en_US': 'ft_putstr',
					'fr_FR': 'ft_putstr'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['ft_putstr.c', 'main.c']
				}
			},
			{
				id: 'ft_putstr',
				dir: 'part_0',
				name: {
					'en_US': 'ft_putstr',
					'fr_FR': 'ft_putstr'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['ft_putstr.c', 'main.c']
				}
			},
			{
				id: 'ft_strcpy',
				dir: 'part_0',
				name: {
					'en_US': 'ft_strcpy',
					'fr_FR': 'ft_strcpy'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['ft_strcpy.c', 'main.c']
				}
			},
			{
				id: 'ft_strlen',
				dir: 'part_0',
				name: {
					'en_US': 'ft_strlen',
					'fr_FR': 'ft_strlen'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['ft_strlen.c', 'main.c']
				}
			},
			{
				id: 'ft_swap',
				dir: 'part_0',
				name: {
					'en_US': 'ft_swap',
					'fr_FR': 'ft_swap'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['ft_swap.c', 'main.c']
				}
			},
			{
				id: 'repeat_alpha',
				dir: 'part_0',
				name: {
					'en_US': 'repeat_alpha',
					'fr_FR': 'repeat_alpha'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['main.c']
				}
			},
			{
				id: 'rev_print',
				dir: 'part_0',
				name: {
					'en_US': 'rev_print',
					'fr_FR': 'rev_print'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['main.c']
				}
			},
			{
				id: 'rot_13',
				dir: 'part_0',
				name: {
					'en_US': 'rot_13',
					'fr_FR': 'rot_13'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['main.c']
				}
			},
			{
				id: 'rotone',
				dir: 'part_0',
				name: {
					'en_US': 'rotone',
					'fr_FR': 'rotone'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['main.c']
				}
			},
			{
				id: 'ulstr',
				dir: 'part_0',
				name: {
					'en_US': 'ulstr',
					'fr_FR': 'ulstr'
				},
				exponent: 4,
				trace: false,
				moulinette: true,
				leaks: true,
				copy: {
					check: ['main.c']
				}
			}
		]
	]
} as examDefinition;
