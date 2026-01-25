interface User {
    firstName: string;
    lastName?: string;
}

function myName(user: User){
    console.log(`LastName: ${user.lastName} ${user.firstName}`);
}

let person = {
    firstName: "venkataPavan",
    lastName: "Chinni"
}

myName(person);

