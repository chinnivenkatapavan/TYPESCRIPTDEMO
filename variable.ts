
let toolName : string = "Playwright";
console.log(toolName);

let x : number;
x = 20;
console.log("Value of x :: " + x);


let y : number;
y = 10;
console.log("Value of y :: " + y);

var z : number = 11;
var z : number = 12;
console.log("Value of z :: " + z);

const q = 33;
// q = 35; cannot assign new value
console.log("Value of q :: " + q);

let a : any = "123456";
console.log("Value of a :: " + a);
a = 29
console.log("Value of a :: " + a);

let isActive : boolean | string;
//isActive = 123; //cannot assign
isActive = "pavan";
console.log("Value of isActive :: " + isActive);
isActive = false;
console.log("Value of isActive :: " + isActive);



function demoFunction(){
    //console.log(value); -> throws an error "Block-scoped variable 'value' used before its declaration."
    let value = "Function_value";
    console.log("Value of value :: " + value);
}
demoFunction();
//console.log("Accessing value outside the function :: " + value); //Cannot find name 'value'.

const a1 = "Assign the value";
//a1 = "New value reassign value"; -> throws an error "Cannot assign to 'a1' because it is a constant."

//Array
const arr: number[] = [1,2,3,4];
arr.push(9); //allowed
arr.push(0,2);
console.log("Value of arr :: " + arr);

//Global Scope
let globalVar: string = "Var is global";

function showGlobal(){
    console.log("Value of globalVar :: " + globalVar);
}
showGlobal();

//Function scope
function showFunction(){
    let localVar: boolean = true; //private variable
    console.log("Value of localVar :: " + localVar);
}
//console.log("Access local variable outside and function", localVar); -> Cannot find name 'localVar'.


//closure
function makrCounter(){
    let count: number = 0; //private variable

    return function(){
        count++;
        return count;
    };
}
const counter = makrCounter();
console.log("Value of counter :: " + counter());
console.log("Value of counter :: " + counter());
console.log("Value of counter :: " + counter());

//closure example 2
let coubter2 = ()=>{
    let count: number = 0;

    return ()=>{
        count++;
        return count;
    };
}

console.log("Value of coubter2 :: " + coubter2());
console.log("Value of coubter2 :: " + coubter2());
console.log("Value of coubter2 :: " + coubter2());

function loginTracker(){
    let attempts:number = 0;

    return function(){
        attempts++
        if(attempts>3){
            return "Account is locked";
        }
        else{
            return `Attempt - ${attempts}`;
        }

    };
}

let tracklogin = loginTracker();
console.log(tracklogin());
console.log(tracklogin());
console.log(tracklogin());
console.log(tracklogin());