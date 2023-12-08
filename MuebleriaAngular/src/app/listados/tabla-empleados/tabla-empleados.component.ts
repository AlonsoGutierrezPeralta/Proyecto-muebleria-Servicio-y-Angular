import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoEntity } from 'src/app/modelo/empleado-entity';
import { EmpleadoService } from 'src/app/servicio/empleado.service';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent {

    data: any[]=[];
    empleadoArray: EmpleadoEntity[]=[];
    constructor(private apiService:EmpleadoService, private router:Router){}
    ngOnInit(): void {
      this.llenarData();
    }
    
   
    llenarData(){
      this.apiService.getData().subscribe(data=>{
        this.data=data;
        this.empleadoArray=data;
        console.log(this.data);
        console.log(this.empleadoArray);
      })
    }
    nuevo(){
      
      this.router.navigate(["ingresar"]);
    }
   
    actualizar(codigo:number){
      this.apiService.codigo=codigo;
      this.router.navigate(["actualizar"]);
    }
    eliminar(codigo:number){
      console.log(codigo);
      this.apiService.eliminarEmpleado(codigo).subscribe(
        result=>{
  
          console.log(result);
    
          this.llenarData();
    
        }
      );
    }
  
  
}
