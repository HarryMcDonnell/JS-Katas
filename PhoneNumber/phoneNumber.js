
/**
 * Write a function that accepts an array of 11 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 * 
 * For the UK - 07000 000 000
 * 
 * For the US - (123) 456-7890
 */

 function getNumber(num) {
     console.log(typeof(num));
     number = num.toString(10);
     console.log(number.length);
     console.log(number.charAt(1));
     switch (number.length) {
         case (10) :
             US1 = "";
             US2 = "";
             US3 = "";
             console.log("test");
            for (let i = 0; i < 3; i++) {
                US1 += number.charAt([i]);
            }
            console.log("test after loop");
            for (let i = 3; i < 6; i++) {
                US2 += number.charAt([i]);
            }
            for (let i = 6; i < 10; i++) {
                US3 += number.charAt([i]);
            }
            console.log("US Format: ("+US1+") " + US2 + "-" + US3);
            break;
         case (11) :
            UK1 = "";
            UK2 = "";
            UK3 = "";
            for (let i = 0; i < 5; i++) {
                UK1 += number.charAt([i]);
            }
            for (let i = 5; i < 8; i++) {
                UK2 += number.charAt([1]);
            }
            for (let i = 8; i < 11; i++) {
                UK3 += number.charAt([i]);
            }
            console.log("UK Format: " + UK1 + " " + UK2 + " " + UK3);
            break;
         default : 
        console.log("Please enter a number between 10-11 digits long");
    }
    //  if (typeof(num) == string) {
    //      console.log('Please enter a number between 10-11 digits.')
    //  }
    // if (number.length <= 9 | number.length >= 11) {
    //      console.log('Number is too short. Please enter 10/11 digits.')
    //  }
    // else if (number.length == 10) {
    //     US1 = [];
    //     US2 = [];
    //     US3 = [];
    //     for (let i = 1; i = 3; i++) {
    //         US1 += number.charAt(i)
    //     }
    //     for (let i = 4; i=6; i++) {
    //         US2 += number.charAt(i)
    //     }
    //     for (let i = 7; i = 10; i++) {
    //         US3 += number.charAt(i)
    //     }
    //     console.log("US Format: ("+US1+") " + US2 + "-" + US3)
    //  }
    // else if (rawNum.length == 11) {
    //      UK1 = [];
    //      UK2 = [];
    //      UK3 = [];
    //      for (let i = 1; i = 5; i++) {
    //          UK1 += rawNum[i]
    //      }
    //      for (let i = 6; i = 8; i++) {
    //          UK2 += rawNum[i]
    //      }
    //      for (let i = 9; i = 11; i++) {
    //          UK3 += rawNum[i]
    //      }
    //      console.log("UK Format: " + UK1 + " " + UK2 + " " + UK3)
    // } 
 }
 getNumber(85337269510);