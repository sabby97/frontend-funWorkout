export class User {

    userId: number;
    userName: string;
    password: string;
    isAdmin: boolean;

    //This is necissary for converson from json to User; 'isAdmin' is changed to 'admin' after leaving the backend
    admin:boolean;
    

    constructor(userName: string = "", password: string = "", isAdmin?: boolean, userId?: number) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.isAdmin = isAdmin; 
    }
}