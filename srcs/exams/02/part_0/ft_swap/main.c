#include <stdio.h>

void	ft_swap(int *a, int *b);

int main(int argc, char **argv)
{
	(void)argc;

	int	*a, *b;
	int	n1, n2;

	n1 = (int)argv[1];
	n2 = (int)argv[2];
	a = &n1;
	b = &n2;
	printf("%u-%u|", *a, *b);
	ft_swap(a, b);
	printf("%u-%u", *a, *b);
	
	return 0;
}
