//create a array
let array : number[] = [1,2,3,6,5,4];
let array1 : Array<string> = ["12","123","1234"];

console.log(`create type1: ${array}`);
console.log(`create type2: ${array1}`);


//adding element
array.push(7);
array.push(7);
array1.push("111");
array1.push("12");

console.log(`After update: ${array}`);
console.log(`After Update on 2: ${array1}`);

//delete element in array
array.pop();
array1.pop();

console.log(`After pop: ${array}`);
console.log(`After pop on 2: ${array1}`);

//mixed array
let personData:[string , number , number] = ["pavan",26,9010505612];
console.log(personData);

//set
let setExample : Set<string> = new Set();
//add
setExample.add("a");
setExample.add("b");
setExample.add("c");
setExample.add("c");
setExample.add("d");

console.log(setExample);

//delete
setExample.delete("c");
console.log("After delete",setExample);

//Map
let mapExample : Map<number,string> = new Map();
//add elements
mapExample.set(1,"chinni");
mapExample.set(2,"venkat");
mapExample.set(3,"pavan");
mapExample.set(4,"pavan");

console.log(mapExample);

//delete
mapExample.delete(1);
console.log("After Delete",mapExample);