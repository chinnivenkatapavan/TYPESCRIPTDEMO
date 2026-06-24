//promsie is used to handle asynchronous operation in javascript and typescript
//it represents a value that may be available now, in the future, or never

let promise = () => {
    return new Promise((resolve,reject)=>{
        resolve("Promise resolved successfully");
    })
}

let promise1 = () => {
    return new Promise((resolve,reject)=>{
        reject("Promise rejected");

    })
}

//while use resolve we have to use then menthod to handle the success case
promise().then((message)=>{
    console.log(message);
})

//while use reject we have to use catch method to handle the failure case
promise1().catch((data)=>{
console.log(data);
})

