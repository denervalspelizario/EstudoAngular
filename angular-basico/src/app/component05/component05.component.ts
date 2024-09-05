import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component05',
  standalone: true,
  imports: [CommonModule], // import para ngFor
  templateUrl: './component05.component.html',
  styleUrl: './component05.component.css'
})
export class Component05Component {
  // Array/Vetor de nomes
  nomes:string[] = ['Ariane', 'Bruna', 'Caio', 'Denis'];
}
