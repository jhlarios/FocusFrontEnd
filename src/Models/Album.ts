export class Album
{
    id : number ;
    userId : number ;
    title : string;

    constructor(id, userId, title)
    {
        this.id = id;
        this.userId = userId;   
        this.title = title;
    }

}