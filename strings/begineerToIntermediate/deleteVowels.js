// Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

// This is the regex way 
    function delVowels(str){
        let oneLetter = str.replace(/[aeiou]/gi,'');
        console.log(oneLetter);
    }
    delVowels("Pranish Shrestha");

    //This is vanilla js way

    // function delVowels(str){
    //     let oneLetter = str.split("");
    //     for(let i=0;i<str.length;i++){
    //         let char = str[i].toLowerCase();
    //         console.log(char);
    //         if(char=="a" || char=="e" || char=="i"|| char=="o"|| char=="u"){
    //             oneLetter[i]="";
    //         }
    //         console.log(oneLetter.join(''))
            
    //     }
    // }
    // delVowels("abcdefghijKDSAJDAKHDJAKD")