// Predict 1:
for(var num = 0; num < 15; num++){
    console.log(num);
}
//My prediction: 0 is less than 15, so it will run until 14.
Output:
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14

// Predict 2:
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
// My prediction: 3 and 9. because the if statement 1%3 == 0. When i=3 it is dividable. Same as when i=9 it is dividable.
Output:
3
9

// Predict 3
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
// My prediction: If j less than equal to 15 increment by 1. Then if j%2 ==0(*dividable), give a value of j+=2. 
// If still wrong then, j%3 ==0(*dividable), given value of j++.
//1,4,5,8,10,11,14,16
Output:
1
4
5
8
10
11
14
16