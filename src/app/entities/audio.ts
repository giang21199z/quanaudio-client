import { Type } from './type';
export class Audio {
    private id: number;
    private name: string;
    private price: number;
    private condition: string;
    private brand: string;
    private image: string;
    private updated: string;
    private type: Type;

    public getPrice(){
        return this.price;
    }

    public constructor({id, name, price, condition, brand, image, updated, type}){
        this.id = id;
        this.name = name;
        this.price = price;
        this.condition = condition;
        this.brand= brand;
        this.image = image;
        this.updated = updated;
        this.type = type;
    }

    public getId(){
        return this.id;
    }
}