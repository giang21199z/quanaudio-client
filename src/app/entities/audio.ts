import { Type } from './type';
export class Audio {
    private id: number;
    private name: string;
    private price: number;
    private condition: string;
    private brand: string;
    private description: string;
    private image: any;
    private image2: string;
    private image3: string;
    private image4: string;
    private updated: string;
    private type: Type;

    public getPrice(){
        return this.price;
    }

    public constructor({id, name, price, condition, brand, image, image2, image3, image4, updated, type, description}){
        this.id = id;
        this.name = name;
        this.price = price;
        this.condition = condition;
        this.brand= brand;
        this.image = image;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.updated = updated;
        this.type = type;
        this.description = description;
    }

    public getId(){
        return this.id;
    }
}