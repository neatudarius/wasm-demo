#include <stdio.h>
#include <string.h>
#include <assert.h>

int main(int argc, char *argv[])
{
    assert(argc == 3);
    assert(strcmp(argv[1], "first_param") == 0);
    assert(strcmp(argv[2], "second_param") == 0);

    printf("%s\n", argv[1]);
    printf("%s\n", argv[2]);
}
