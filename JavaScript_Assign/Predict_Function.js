function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);
//When console.log(word), out come will give Hello because greeting was first assigned/return Hello, then later assigned var word = greeting();
//which word = Hello.

    function add(num1, num2){
            console.log("Summing Numbers!");
            console.log("num1 is: " + num1);
            console.log("num2 is: " + num2);
            var sum = num1 + num2;
            return sum;
        }
        var result1 = add(3,5);
        var result2 = add(4,7);
        console.log(result1);
        console.log(result2);
//Summing Numbers! num1 is (3,5) and num2 is (4,7), sum is 8 and 11.
// output:
// Summing Numbers!
// num1 is: 3
// num2 is: 5
// Summing Numbers!
// num1 is: 4
// num2 is: 7
// 8
// 11
// Now I see why. from the start, var result1 = "add(3,5)" giving the value of what is num1 and num2.
//console.log("Summing Numbers!") dont really much, its just print out the outcome, but line 12 you add the numbers and so as line 13.
//now at the line 14 you summing num1 and num2 to get the outcome. So line 19 shown as 8 and line 20 for 11.

function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }
    //undefined/error