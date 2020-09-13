export class Users
{
    id : number ;
    name : string;
    username : string;
    email : string;
    address : string;
   

    constructor(id, name, username, email, address)
    {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        
    }

}