import { lang } from 'langs/index';

interface exercice {
	id: string;
	dir?: string;
	name: Record<lang, string>,
	exponent: number;
	trace: boolean;
	allowed_functions?: string[];
	forbidden_keywords?: string[];
	moulinette: boolean | [ boolean, boolean ];
	leaks: boolean;
	copy?: {
		user?: string[],
		check?: string[]
	}
}

export interface examDefinition {
	hide?: boolean,
	id: string;
	dirName: string;
	name: Record<lang, string>;
	goal: number;
	time: string;
	exercices: exercice[][]
}
