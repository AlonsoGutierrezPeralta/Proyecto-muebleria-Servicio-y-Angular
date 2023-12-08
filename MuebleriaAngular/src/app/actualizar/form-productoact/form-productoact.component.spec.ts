import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductoactComponent } from './form-productoact.component';

describe('FormProductoactComponent', () => {
  let component: FormProductoactComponent;
  let fixture: ComponentFixture<FormProductoactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductoactComponent]
    });
    fixture = TestBed.createComponent(FormProductoactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
