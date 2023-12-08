import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleadosComponent } from './tabla-empleados.component';

describe('TablaEmpleadosComponent', () => {
  let component: TablaEmpleadosComponent;
  let fixture: ComponentFixture<TablaEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaEmpleadosComponent]
    });
    fixture = TestBed.createComponent(TablaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
