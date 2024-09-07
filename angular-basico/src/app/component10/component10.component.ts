import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; // imports do form

@Component({
  selector: 'app-component10',
  standalone: true,
  imports: [ReactiveFormsModule], // nao esquecer o import para usar FormGroup
  templateUrl: './component10.component.html',
  styleUrl: './component10.component.css'
})
export class Component10Component {

  // formulario
  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  })
}
