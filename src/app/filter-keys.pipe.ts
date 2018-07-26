import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKeys'
})
export class FilterKeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
  }

}
