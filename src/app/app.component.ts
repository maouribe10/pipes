import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myFecha = new Date(  // para castear en html uso pipe {{ myFecha | date:"dd/MM/yyyy" }}
    2018,
    2,
    10
  );

  nombre = 'Mauricio';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  numDecimal = 345.45
  valorPorcentaje = 0.234
  precio = 56000.456
  heroe = {
            nombre: 'Logan',
            poder: 'garras',
            direccion: {
              calle: '34',
              avenida: 'Colombia'
            }
          }

valorDePromesa = new Promise( (resolve, reject) => {

  setTimeout( () => resolve('Llegó tarde!'), 3500);

})

  nombre2 = 'osCar maURIcio Uribe cOrderO'

  video = '4O8NggqxQqc'
  url = 'https://www.youtube.com/embed/'
  password = 'mauricio'
  ocultar = true
  etiquetaBoton = this.ocultar ? 'Desactivar' : 'Activar'

  cambiarValorOcultar() {
    this.ocultar = !this.ocultar
    this.etiquetaBoton = this.ocultar ? 'Desactivar' : 'Activar'
  }

}
