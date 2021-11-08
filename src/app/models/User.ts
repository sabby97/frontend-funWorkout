export class User {

    userId: number;
    userName: string;
    password: string;
    isAdmin: boolean;

    constructor(userName: string = "", password: string = "", isAdmin: boolean, userId?: number) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.isAdmin = isAdmin; 
    }
}