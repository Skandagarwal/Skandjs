#include <stdio.h>

int main() {
    int arr[] = {2, 4, 16, 8,9};
    // int n = 5;
    int max = 0;
    int min = 0;
    
    for(int i = 0; i < 5; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    for(int i=0;i<5;i++){
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    printf("%d\n", max);
    printf("%d",min);
    
}
