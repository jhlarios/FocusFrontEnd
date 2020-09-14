export class Photo
{
    albumId : number ;
    id : number ;   
    title : string;
    url : string;
    thumbnailUrl : string;
    
    constructor(albumId,id, title, url,thumbnailUrl )
    {
        this.albumId = albumId;
        this.id = id;      
        this.title = title;
        this.url = url;
        this.thumbnailUrl = thumbnailUrl;
    }

}