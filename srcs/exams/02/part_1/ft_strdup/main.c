#include <stdio.h>

char	*ft_strdup(char *src);

int		main(int argc, char **argv)
{
	if (argc == 1)
		printf("%s\n", ft_strdup(""));
	else
		printf("%s\n", ft_strdup(argv[1]));
	return(0);
}
