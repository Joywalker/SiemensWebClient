export class UserModel {
    Username: string;
    Password: string;
    CNP: string;
    FirstName: string;
    LastName: string;
    Employee_ID: string;
    UserRole: string;
    /**
     *
     */
    constructor(
        uname: string,
        pwd: string,
        cnp: string,
        fname: string,
        lname: string,
        id: string,
        role: string
    ) {
        this.Username = uname;
        this.Password = pwd;
        this.CNP = cnp;
        this.FirstName = fname;
        this.LastName = lname;
        this.Employee_ID = id;
        this.UserRole = role;
    }
}