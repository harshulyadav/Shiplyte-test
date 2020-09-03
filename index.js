/* 
Question 1 : Create an Array from 0...100 without using traditional For-loop
*/
let arr = [];
function createArray() {
    let i = 0;

    while (i < 100) {
        i++; 
        arr.push(i);
    }
    // console.log('arr', arr);
    selecteven(arr);
}

createArray();

/* 
Question 2 : Create an Array of only even numbers from the above array
*/

function selecteven(arr) {
    let evenArr = arr.filter(item => item % 2 == 0);
    // console.log('evenArr', evenArr);
}


/* 
Question 3 : Create a function that returns a Promise which returns the 
square of only even numbers and 
throws an error if an odd number is passed
create an array of even squares using the previous array
*/

let squaresArray = [];
var sum = 0;

let errCount = 0;

const calcSquareinput = (input => {
    return new Promise((resolve, reject) => {
        if(input % 2 == 0) {
            squaresArray.push(input * input);
            resolve(input * input);
        } else {
            reject({message: 'Number is odd'});
            errCount += 1;
        }
    }); 
});

calcSquareinput(2).then(result => {

    // Question 4: Sum of all the squares from the above array of Even Squares

    sum = squaresArray.reduce((a, b) => {
        return a + b;
    }, 0);
    // console.log('sum', sum);
    checkSquareFunctionality();
}).catch(error => {
    console.log('error', error);
});


/* 
    Question 5: 
*/

function checkSquareFunctionality() {
    let i = 0;
    while (i < 100) {
        calcSquareinput(i).then(result => {
            console.log('result', result);
            // console.log('squaresArray', JSON.stringify(squaresArray));
        }).catch(error => {
            // console.log('error on squareFunction', error);
        });
        i++;
    }
    
}

setTimeout(() => {
    console.log('errCount', errCount);
    console.log('squaresArray', squaresArray);
    console.log('arrayCount', squaresArray.length);
}, 3000);

// Question 6 
