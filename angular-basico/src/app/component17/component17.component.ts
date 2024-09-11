import { Component } from '@angular/core';

@Component({
  selector: 'app-component17',
  standalone: true,
  imports: [],
  templateUrl: './component17.component.html',
  styleUrl: './component17.component.css'
})
export class Component17Component {

  // Variavel nome
  nome:string = 'Dener';

  // Variavel media
  media:number = 0;

  // Função para calcular a media
  calculo(n1: number, n2:number){
    return (n1+n2)/2
  }



}
