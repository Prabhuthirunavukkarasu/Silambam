import { Pipe, PipeTransform } from '@angular/core';
import { Member } from '../models/memberModel';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Member[], searchText: string): Member[] {
    if (!items)
      return [];
    if (!searchText)
      return items;
    return items.filter(it => {
      return it.name?.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}
