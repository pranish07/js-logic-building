// 5.Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

let num1 =30,num2 =29,num3=40;


if(num2>num1){
    if(num3>num1){
        console.log('num1 is minimum')
    }else{
        console.log('num3 is minimum')
    }
    
}else if (num2>num3){
    console.log("num3 is minimum")
}else{
    console.log('num2 is minimum');
}