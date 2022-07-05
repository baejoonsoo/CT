#include <stdio.h>
int Cntfunc(int num) {
    int result = 1;
    for (int i = 0; i < num; i++)result *= (i + 1);
    return result;
}
int main() {    
    int N, limit, heights[11], limitcnt = 0, nonlimitcnt = 0;
    scanf("%d %d", &N, &limit);
    for (int i = 0; i < N; i++) {
        scanf("%d", &heights[i]);
        if (heights[i] > limit) {
            limitcnt++;
        }
        else {
            nonlimitcnt++;
        }
    }
    printf("%d", Cntfunc(limitcnt) * Cntfunc(nonlimitcnt));
    return 0;
}