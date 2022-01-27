// function that will accept array(parametar) movies
//print in console log
//ignore element thar are not strings
//print in the dom
console.log("**********exercise one*********");

let movies= ["notebook","all of me","expendable","taken","london has fallen",];


function arrayOfMovies(array){


    if(!array.length){
        console.log("nothing here");
    }else{
        for(let i = 0;i <array.length;i++){
            console.log(`${i+1}.${array[i]}`);
        }
    }
}
arrayOfMovies(movies);
let movie=document.getElementById("print").innerHTML+=(movies);

//function accept array of numbers and number - two parametars
//return new array  with numbers multipled by the number provided as parametrar
//checking if the array is valid 
//ignore elements that are not numbers
// check if number (parametar) is number


console.log("*******exercise 2***********");

let arrayOfNums=[1,2,3,4,5,6,7,8,9,false,undefined];
let someNumber=4;

function numbers(numberArr,theNum){
    let emptyArray=[];
    if(isNaN(theNum)){
        return "wrong wrong  wrong";
    }else {
        for(let i = 0;i<numberArr.length;i++){
            if(typeof numberArr[i]==="number"){
                emptyArray.push(numberArr[i]*theNum);
            }
            
        }return emptyArray;
    }
};


let calculation =numbers(arrayOfNums,someNumber)

console.log(calculation);

//exercise 3

console.log("************************exercise 3****************************")

//function with two arrays of numbers as parametar
//the function shous return the sum of both arrays
//check if the arrays are valid
//eliminate the elements that are not numbers
let firstSum=[10,30,50,5];
let oneSum = 0;

let secondSum=[50,70,90,100];
let twoSum=0;
function twoArrays(firstArray,secondArray){
   
    {
        for(let i =0;i< firstArray.length;i++){
            oneSum+=firstSum[i]
            }
    }

    console.log(firstSum);
    console.log(`the sum of first array is: ${oneSum}`);

    for(let iterator=0; iterator<secondArray.length;iterator++){
        twoSum+= secondSum[iterator];
    }
    console.log(secondSum);
    console.log(`the sum of second array is : ${twoSum}`);

    


}
twoArrays(firstSum,secondSum);
let result = oneSum + twoSum;
console.log(`the sum of both arras is ${result}`);








/*
function twoArrays(firstArray,secondArray){
    let firstSum=0;
    let secondSum=0;
    let sum=0;
    for(let i =0;i< firstArray.length;i++){
       
        if(typeof firstArray[i]==="number"){
            firstSum+=firstArray[i];
        }
    };
    for(let i =0;i <secondArray.length;i++){
        if(typeof secondArray[i]==="number"){
            secondSum += secondArray[i];
        }
    };
    sum = firstArray + secondArray;
    return `${firstSum} + ${secondSum} = ${sum}`;

}

let arrNumberOne=[true,false,undefined,10,20,30,40];
let arrNumberTwo=[false,undefined,true,4,6,8,346];

let theCalculation=twoArrays(arrNumberOne,arrNumberTwo);
console.log(theCalculation);
*/






















