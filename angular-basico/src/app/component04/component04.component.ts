import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  standalone: true,
  imports: [CommonModule], // import referente ao ngIf
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.css'
})
export class Component04Component {

  // Variável para exibir ou cultar o quadrado
  // sendo true exibe sendo false aoculta usando o ngIf
  exibir:boolean = true;

  // Funcao para exibir ou ocultar quadrado
  acao()
  {
    if(this.exibir === true)
    {
      this.exibir = false;
    }else {
      this.exibir = true;
    }

  }


}
