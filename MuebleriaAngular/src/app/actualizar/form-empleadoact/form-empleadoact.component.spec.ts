import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpleadoactComponent } from './form-empleadoact.component';

describe('FormEmpleadoactComponent', () => {
  let component: FormEmpleadoactComponent;
  let fixture: ComponentFixture<FormEmpleadoactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEmpleadoactComponent]
    });
    fixture = TestBed.createComponent(FormEmpleadoactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
