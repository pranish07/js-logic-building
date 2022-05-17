// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

//review this again. 

 function minDate(a,b){
    const dates = [];

    dates.push(new Date(a));
    dates.push(new Date(b));
    const minDate = new Date(Math.min(dates[0],dates[1]));
    console.log(dates)
    console.log(minDate)
 }
 minDate('02/05/2021','2021/01/24');
