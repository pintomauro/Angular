import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre  = 'Mauricio Pinto';
  nombre2 = 'mAuRiCIo pInTO';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number  = Math.PI;
  porcentaje  = 0.234;
  salario     = 1234.5;
  fecha: Date = new Date();
  activar     = true;

  idioma = 'en';
  videoUrl = 'https://www.youtube.com/embed/zisuhZqTeH4';

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);

  });


  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };





}
