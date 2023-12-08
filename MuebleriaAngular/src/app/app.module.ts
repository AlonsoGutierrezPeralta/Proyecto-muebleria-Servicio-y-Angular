import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaEmpleadosComponent } from './listados/tabla-empleados/tabla-empleados.component';
import { FormEmpleadoComponent } from './mantenedores/form-empleado/form-empleado.component';
import { FormEmpleadoactComponent } from './actualizar/form-empleadoact/form-empleadoact.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TablaProductosComponent } from './listados/tabla-productos/tabla-productos.component';
import { TablaProveedoresComponent } from './listados/tabla-proveedores/tabla-proveedores.component';
import { TablaUsuariosComponent } from './listados/tabla-usuarios/tabla-usuarios.component';
import { FormProductosComponent } from './mantenedores/form-productos/form-productos.component';
import { FormProveedoresComponent } from './mantenedores/form-proveedores/form-proveedores.component';
import { FormProductoactComponent } from './actualizar/form-productoact/form-productoact.component';
import { FormProveedoractComponent } from './actualizar/form-proveedoract/form-proveedoract.component';
import { MantenedoresComponent } from './paginas/mantenedores/mantenedores.component';
import { IndexComponent } from './paginas/index/index.component';
import { ConsultasComponent } from './paginas/consultas/consultas.component';
@NgModule({
  declarations: [
    AppComponent,
    TablaEmpleadosComponent,
    FormEmpleadoComponent,
    FormEmpleadoactComponent,
    TablaProductosComponent,
    TablaProveedoresComponent,
    TablaUsuariosComponent,
    FormProductosComponent,
    FormProveedoresComponent,
    FormProductoactComponent,
    FormProveedoractComponent,
    MantenedoresComponent,
    IndexComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
