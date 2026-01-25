function sum(a, b) {
    return a + b;
}
var result = sum(10, 20);
console.log(result);
//arrow function
var add = function (a, b) { return a + b; };
console.log(add("pavan", "chinni"));
var data = function (userName, password) {
    console.log("UserName: ", userName);
    console.log("password: ".concat(password));
};
data("pavan", "123456789");
data("HR");
