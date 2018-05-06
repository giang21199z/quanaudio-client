export class Slide{
    private id = 0;
    private title = '';
    private description = '';
    private content = '';
    private image = '';
    private advertisement;

    constructor({id: id, title: title, description: description, content: content, image: image, advertisement: advertisement}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.image = image;
        this.advertisement = advertisement; 
    }
}