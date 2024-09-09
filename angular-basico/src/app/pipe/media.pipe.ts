import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media',
  standalone: true
})
export class MediaPipe implements PipeTransform {

  // objeto que retorna um number
  transform(objeto:any): number {
    return (objeto.nota1 + objeto.nota2)/2;
  }

}
