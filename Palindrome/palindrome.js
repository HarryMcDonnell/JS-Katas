let input = "";     //case sensitive
function isPalindrome(string) {
    let reString=''; //initialise empty string for comparison
    for (let i=(string.length-1); i>=0; i--) { 
        reString += (string.charAt(i));     //fill empty string with input string in reverse
    }
    if (string == reString) {
        console.log(`${string} is a Palindrome.`)      //compare input and test string
    }
    else {
        console.log(`${string} is not a Palindrome`);
    }
}