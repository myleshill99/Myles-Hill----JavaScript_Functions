console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds (count) {

    if (count < 0) {
        for (let i = 0; i >= count; i--) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    } else {
        for (let i = 0; i <= count; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
}
let exercise1response= prompt("What number would you like to use for printOdds");
printOdds(exercise1response); 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge (userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}
var nameresponse= prompt("What is your name"); 
var ageresponse= prompt("What is your age"); 
checkAge(nameresponse, ageresponse); 

function checkQuadrant (x, y) {
    if (x === 0) {
        console.log(`(${x}, ${y}) is on the Y axis`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the X axis`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 1`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in quadrant 2`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in quadrant 3`);
    } else {
        console.log(`(${x}, ${y}) is in quadrant 4`);
    }
}
var userx= prompt("What number would you like to use for the x coordinate"); 
var usery= prompt("What number would you like to use for the y coordinate"); 
checkQuadrant(userx, usery); 




function isValidtriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a){
        console.log(`invalidtriangle`);     
    }else if (a == b && b == c) {
        console.log(`Equilateral`);     
    }else if (a == b || b == c || a == c) {
        console.log(`Isosceles`);     
    }else if (a != b && a != c && b != c) {
        console.log(`Scalene`); 
    }
} 
var userinputa = prompt("What would you like the first side to be?"); 
var userinputb = prompt("What woud you like the second side to be?"); 
var userinputc = prompt("What would you like the third side to be?");
isValidtriangle(userinputa, userinputb, userinputc); 

