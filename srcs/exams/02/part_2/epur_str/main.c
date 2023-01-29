#include <unistd.h>

int		skip_whitespace(char *str, int i)
{
	while (str[i] == ' ' || str[i] == '\t')
		++i;
	return i;
}

void	epur_str(char *str)
{
	int i = 0;
	int first_word = 1;
	int len = 0;

	i = skip_whitespace(str, i);
	while (str[i] != '\0')
	{
		if (first_word == 0)
			write(1, " ", 1);
		while (str[len] != '\0' && str[len] != ' ' && str[len] != '\t')
			++len;
		write(1, str + i, len);
		i = i + len;
		first_word = 0;
		i = skip_whitespace(str, i);
	}
}

int		main(int argc, char **argv)
{
	if (argc == 2)
		epur_str(argv[1]);
	write(1, "\n", 1);
	return 0;
}