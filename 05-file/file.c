#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[]) {
    FILE *file = NULL;
    printf("file name: %s\n", argv[1]);
    file = fopen(argv[1], "r");

    char line[128];

    if(file != NULL) {
        printf("\nFile is successfully open\n");

        while (fgets(line, sizeof(line), file) != NULL)
        {
            int a;

            if (sscanf(line, "%d", &a) == 1)
            {
                /* Values read, do something with them */
                printf("%d\n", a);
            }
        }

    }
    else {
        printf("\nFile is not opening\n");
        return 1;
    }

    fclose(file);
    return 0;
}
