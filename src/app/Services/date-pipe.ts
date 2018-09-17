import { PipeTransform, Pipe } from "@angular/core";
@Pipe({ name: 'date',  pure: false })
export class DatePipe implements PipeTransform {
  transform(value: string): any {
    return value.split("T")[0];
  }
}