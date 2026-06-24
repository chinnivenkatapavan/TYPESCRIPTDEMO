//A function passing has parameter is called callback
//one way

function test(scenario:any, verify:any){
    console.log(`type 1: Status for ${scenario}`);
    verify();
}
function verify(){
    console.log("type 1: Welcome page is displayed");
}
test("Done for",verify);

function test1(scenario1:string,verify1:any){
    console.log(`Type 2: Status for ${scenario1} `);
    verify1();
}
test1("Type 2", ()=>{
    console.log("Type 2: Welcome page is displayed");
});


function test2(scenario2:string, verify2:( )=>void){
    console.log(`Type 3: Status for ${scenario2}`);
    verify2();
}
test2("Type 3", ()=>{
    console.log("Type 3: Welcome page is displayed");
});

function test3(scenario3:string,verify3:any){
    console.log(`Type 4: Status for ${scenario3}`);
    verify3();
}
//function verify3(){
//    console.log("Type 4: Welcome page is displayed");
//}
test3("type 4", ()=>{
    console.log("Type 4: Welcome page is displayed");
});
