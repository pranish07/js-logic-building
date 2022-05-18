// Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

const isAlphaNumeric = str => {/^[a-z0-9]+$/gi.test(str);
}
isAlphaNumeric("hello78");
