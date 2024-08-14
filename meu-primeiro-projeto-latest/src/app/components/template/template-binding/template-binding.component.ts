import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Dener Plz";
  public age = 37;

  public condition = this.age > 1 ? "Teste 1" : "Teste 2"

  public srcValue = "https://vidafullstack.com.br/wp-content/uploads/2022/04/Aprenda-o-que-e-Databinding-com-Angular-980x551.jpg"

  public isDisabled = true;

  public isTextDecoration = this.age > 32 ? 'underline' : 'none';
}
