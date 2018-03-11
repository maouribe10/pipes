import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, ocultar: boolean = true): any {

    if (ocultar) {
      return value.replace(/./g, '*')
    }
    return value;
  }

}
