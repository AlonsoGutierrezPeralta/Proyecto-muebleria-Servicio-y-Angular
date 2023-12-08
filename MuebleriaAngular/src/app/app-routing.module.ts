import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEmpleadosComponent } from './listados/tabla-empleados/tabla-empleados.component';
import { FormEmpleadoComponent } from './mantenedores/form-empleado/form-empleado.component';
import { FormEmpleadoactComponent } from './actualizar/form-empleadoact/form-empleadoact.component';
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

const routes: Routes = [
  {path:'listar/Empleados', component: TablaEmpleadosComponent},
  {path:'listar/Productos', component: TablaProductosComponent},
  {path:'listar/Proveedores', component: TablaProveedoresComponent},
  {path:'listar/Usuarios', component: TablaUsuariosComponent},
  {path: 'ingresar', component: FormEmpleadoComponent},
  {path: 'actualizar', component: FormEmpleadoactComponent},
  {path: 'ingresarproducto', component: FormProductosComponent},
  {path: 'ingresarproveedor', component: FormProveedoresComponent},
  {path: 'actualizarproducto', component: FormProductoactComponent},
  {path: 'actualizarproveedor', component: FormProveedoractComponent},
  {path: 'cargarMantenedores', component: MantenedoresComponent},
  {path: 'cargarIndex', component: IndexComponent},
  {path: 'cargarConsulta', component: ConsultasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
