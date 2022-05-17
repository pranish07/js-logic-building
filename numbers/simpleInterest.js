// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

function simpleI(P,T,R){
    let SI = (P*T*R)/100
    console.log("Output: " + SI)
}
simpleI(100,6,2);