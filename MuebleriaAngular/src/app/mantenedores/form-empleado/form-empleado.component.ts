import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/servicio/empleado.service';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent {

  frmEmpleado=new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    puesto: new FormControl(''),
    
  }
  )


  constructor(private empleadoService: EmpleadoService, private router:Router){}

  guardarEmpleado(){
    console.log(this.frmEmpleado.value);
    this.empleadoService.guardarDataEmpleados(this.frmEmpleado.value).subscribe((result)=>{
      console.log(result);
      this.frmEmpleado.reset();
      this.router.navigate(["listar"]);
    })

  }
  
  ngOnInit(): void {
    
    
  }

}
