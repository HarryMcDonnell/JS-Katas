function isSquare(number) {
    if (Number.isInteger(Math.sqrt(number))) {
        console.log(`The number ${number} is a perfect Square.`);
    }
    else {
        console.log(`The number ${number} is not a perfect Square.`)
    }
}
isSquare(13225);

/*
If it ends in 2,3,7,8 - not a perfect square


*/