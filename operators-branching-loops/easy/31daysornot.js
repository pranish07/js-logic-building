// 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.
function daysInMonth (month, year) {
    console.log( new Date(year, month, 0).getDate());
}
daysInMonth(3,2021);