// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

function profitOrLoss(cp,sp){
    let output;
    
    if(sp>cp){
        output = sp -cp;
        console.log("output: " + output + " Profit")
    }else if (cp>sp){
        output = cp-sp;
        console.log("output: "+output+ " Loss")
    }else{
        console.log("NO pain no gain");
    }
}
profitOrLoss(200,200)