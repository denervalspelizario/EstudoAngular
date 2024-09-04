import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  // aumenta 1 ano
  public sum()
  {
    return this.age++;;
  }

  // diminui 1 ano
  public sub()
  {
    return this.age--;;
  }

  //
  public onKeyDown(event: Event)
  {
    return console.log(event)
  }

  public onMouseEvent(event: any)
  {
    return console.log(event)
  }
}
