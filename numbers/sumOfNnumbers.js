// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

function sum(n){
    let output=0;
    if(n>0){
    for(let i=0;i<=n;i++){
        output += i;
    }
    console.log(output);}
    else{
        console.log("write a positive number");
    }
}
sum(10);