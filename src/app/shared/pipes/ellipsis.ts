import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, args: number) {
    if (args === undefined || args === null) {
      return value;
    } else if (value === undefined || value === null) {
      return 'N/A';
    } else if (value.length > args) {
      return value.substring(0, args) + '...';
    } else {
      return value;
    }
  }
}
