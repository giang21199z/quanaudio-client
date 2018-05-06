import { Pipe } from "@angular/core";

@Pipe({
    name: 'pricePipe'
})
export class PricePipe{
    transform(value: number): string {
        let input = value.toString();
        let result = [];
        while(input.length > 0){
            const len = input.length;
            const patch = input.length > 3 ? input.substr(len - 3, len) : input;
            result.push(patch);
            input = input.substr(0, len - 3);
        }
        return result.reverse().toString();
    }
}