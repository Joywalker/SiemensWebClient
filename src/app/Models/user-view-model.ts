export class UserViewModel {
    username:string;
    password:string;
    constructor(username: string, password:string) {
        this.username = username;
        this.password = password;
    }
    get getUsername(){
        return this.username;
    }
}