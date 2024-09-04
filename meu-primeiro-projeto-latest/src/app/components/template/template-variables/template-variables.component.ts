import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NextComponent } from '../../nextcomponent/nextcomponent.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule, NextComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') public nameInput!: ElementRef
  @ViewChild('h2') public nameH2!: ElementRef

  ngAfterViewInit()
  {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameInput.nativeElement.innerText);
  }
}
