import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  standalone: true,
  imports: [],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css'
})
export class Component08Component {

  // Estudo de control flow

  // variavel de media
  media:number = 10

  // Vetor/Array
  nomes:string[] = ['Dener','Jessika','Tom', 'Gabi','Pedro']

  // Lingaugem
  linguagem:string = 'HTML';
}
