import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NextComponent } from './components/nextcomponent/nextcomponent.component';
import { TesteComponent } from './components/teste/teste.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NextComponent, TesteComponent, TemplateBindingComponent],
  styleUrls:['./components/nextcomponent/nextcomponent.component.scss'],
  template:`
  <!--<router-outlet></router-outlet>-->
  <h1>Curso de Angular</h1>
  <app-template-binding/>

  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
