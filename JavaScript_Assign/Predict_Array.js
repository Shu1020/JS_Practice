//Predict 1
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
//outcome is following:
//actual arr length is 7. Therefore, 0=8, 1=6, 2=7, 3=5, 4=3, 5=0, 6=9.
Outcome:
8
6
7
5
3
0
9

// Predict2
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}
//my prediction: "That is odd!", "That is odd!" 8, 4, 2, "That is odd!", "That is odd!"
Outcome:
That is odd!
That is odd!
8
4
2
0
That is odd!

// Predicit 3
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);
//console.log(arr):[-1,-3,-8,5,Zero,-4,1]
//console.log(newArr):[-5,-2,-1]
Output:

arr:[ -1, -3, -8, 5, 'Zero', 2, -4, 1 ]
newArr:[ -5, -2, -1 ]