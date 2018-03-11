import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase();
        const array = value.split(' ')
        // let cadenaCapitalizada = ''

        // tslint:disable-next-line:forin
        for ( const i in array ) {
            if (todas) {
                array[i] = array[i][0].toUpperCase() + array[i].substr(1)
            }
        }

        /*array.forEach((element, indice, arreglo) => {
            let letraInicial = element.substr(0, 1)
            let nombre = element.substr(1);
            letraInicial = letraInicial.toUpperCase();
            nombre = letraInicial + nombre;
            if ((indice + 1) === arreglo.length) {
                cadenaCapitalizada += nombre

            } else {
                cadenaCapitalizada += nombre + ' '
            }
        });*/
        return array.join(' ');

    }
}
