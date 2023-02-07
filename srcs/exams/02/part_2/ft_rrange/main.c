#include <stdio.h>
#include <stdlib.h>

int		*ft_rrange(int start, int end);

int		main(int argc, char **argv)
{
	(void)argc;

	int	*lst;
	int	*head;

	lst = ft_rrange(atoi(argv[1]), atoi(argv[2]));
	head = lst;
	while (*lst)
	{
		printf("%i-", *lst);
		lst++;	
	}
	free(head);
	return (0);
}