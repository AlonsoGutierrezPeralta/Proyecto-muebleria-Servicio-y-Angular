import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoEntity } from 'src/app/modelo/empleado-entity';
import { EmpleadoService } from 'src/app/servicio/empleado.service';
@Component({
  selector: 'app-form-empleadoact',
  templateUrl: './form-empleadoact.component.html',
  styleUrls: ['./form-empleadoact.component.css']
})
export class FormEmpleadoactComponent {
  frmEmpleado=new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    puesto: new FormControl(''),
    
  }
  )

  empleado:EmpleadoEntity=new EmpleadoEntity();

  constructor(private empleadoService:EmpleadoService, private router:Router){

  }
  guardarEmpleado(){
    this.empleadoService.actualizarEmpleados(this.frmEmpleado.value).subscribe((result)=>{
      console.log(result);
      this.frmEmpleado.reset();
      this.router.navigate(["listar/Empleados"]);
    }

    )
  }

  ngOnInit(): void {
    this.llenarData();
  
}
llenarData(){
   this.empleadoService.obtenerEmpleado().subscribe(data=>{
      this.empleado=data;
      console.log(this.empleado);
      this.frmEmpleado.controls["codigo"].setValue(""+this.empleado.codigo);
      this.frmEmpleado.controls["nombre"].setValue(this.empleado.nombre);
      this.frmEmpleado.controls["apellido"].setValue(this.empleado.apellido);
      this.frmEmpleado.controls["puesto"].setValue(""+this.empleado.puesto);
    
   }

   )
}
}
