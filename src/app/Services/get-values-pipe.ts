import { PipeTransform, Pipe } from "@angular/core";
@Pipe({ name: 'mapValues',  pure: false })
export class MapValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.entries(value);
  }
}
// .map(key => value[key]);