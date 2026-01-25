function sum(a : number , b : number){
    return a+b;
}

let result = sum(10,20);
console.log(result);

//arrow function
let add = (a:any,b:any) => {return a+b;};

console.log(add("pavan","chinni"));

let data = (userName:string,password?:string) => {
    console.log("UserName: ", userName);
    console.log(`password: ${password}`);
}

data("pavan","123456789");
data("HR");