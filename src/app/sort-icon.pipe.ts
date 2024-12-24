import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortIcon',
})
export class SortIconPipe implements PipeTransform {
  transform(sort: number): string {
    let symbol = '';
    switch (sort) {
      case 1:
        symbol = '☕';
        break;
      case 2:
        symbol = '⭐';
        break;
      case 3:
        symbol = '⬭';
        break;
      case 4:
        symbol = '𝅘𝅥𝅲';
        break;
      case 5:
        symbol = '⚡';
        break;
      case 6:
        symbol = '⚘';
        break;
      case 7:
        symbol = '♗';
        break;
      case 8:
        symbol = '♜';
        break;
      case 9:
        symbol = '❤';
        break;
      case 10:
        symbol = '☔';
        break;
      case 11:
        symbol = '❋';
        break;
      case 12:
        symbol = '✰';
        break;
    }
    return symbol;
  }
}
