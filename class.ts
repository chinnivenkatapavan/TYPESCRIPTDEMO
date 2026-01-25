class User {
   name1: string;

   constructor(name:string){
    this.name1 = name;
   }

   getMethod(){
    console.log("Name",this.name1);
   }
}

class Admin extends User {

    constructor(name1: string){
        super(name1);
    }

    admingetMethod(){
        console.log("Admin_Name",this.name1);
    }

}

let user = new User("rohit");
user.getMethod();

let admin = new Admin("aaaaa");
admin.admingetMethod();
