function myName(user) {
    console.log("LastName: ".concat(user.lastName, " ").concat(user.firstName));
}
var person = {
    firstName: "venkataPavan",
    lastName: "Chinni"
};
myName(person);
