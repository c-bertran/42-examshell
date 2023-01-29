#include <stdlib.h>

int	*ft_range(int start, int end)
{
	int	size = end - start;
	int	*ret;
	int	*ptr;

	if (size)
	{
		ptr = (int *)malloc(sizeof(int) * size);
		if (ptr)
		{
			ret = ptr;
			while (start <= end)
			{
				*ptr = start;
				ptr++;
				start++;
			}
			return (ret);
		}
	}
	return (NULL);
}

