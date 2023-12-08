import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProveedoractComponent } from './form-proveedoract.component';

describe('FormProveedoractComponent', () => {
  let component: FormProveedoractComponent;
  let fixture: ComponentFixture<FormProveedoractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProveedoractComponent]
    });
    fixture = TestBed.createComponent(FormProveedoractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
