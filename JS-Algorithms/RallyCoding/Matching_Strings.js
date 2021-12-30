// Matching Strings
/* You are given two strings as arguments. The first string will be a word or sentence, like "google". The second string will contain a wildcard character of * that will be used with a sequence of leading or following characters. Return true if both the leading character sequence and the following sequence matches the first string.*/

// Requirements: Must return either true or false
/*
Example #1
    solve("google", "g*ler" )
    > false

Example #2
    solve("google", "go*e" )
    > true
*/

const solve = (strArg, search) => {
    //find index of wildcard
    index = search.split("").indexOf("*")
    //calculate length from wildcard to end
    revIndex = (search.length - 1) - index


    return strArg.startsWith(search.slice(0, index)) && (strArg.endsWith(search.slice(-revIndex)) || search.endsWith("*"))

    /* 
    Function returns true only if BOTH conditions (1) and (2) are true:
    (1) first string starts with characters before wildcard,
    
    (2) first string ends with character sequence following wildcard. In the case where second string ends in wildcard, condition 2) is made to always return true, as any number of characters would technically match the string. 
    
    Notably, returns true even if wildcard stands in for 0 characters (e.g. solve("google", "goo*gle) -> true), but this meets the requirements.
    */
};
