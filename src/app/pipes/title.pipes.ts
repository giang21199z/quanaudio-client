import { Pipe } from "@angular/core";

@Pipe({
    name: 'titlePipe'
})
export class TitlePipe {
    transform(value: string): string {
        return value.length > 50 ? value.substring(0, 50) + '...' : value;
    }
}