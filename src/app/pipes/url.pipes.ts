import { Pipe } from "@angular/core";

@Pipe({
    name: 'urlPipe'
})
export class UrlPipe{
    transform(value: string): string {
        return value.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
    }
}