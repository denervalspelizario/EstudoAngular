import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextcomponentComponent } from './nextcomponent.component';

describe('NextcomponentComponent', () => {
  let component: NextcomponentComponent;
  let fixture: ComponentFixture<NextcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
