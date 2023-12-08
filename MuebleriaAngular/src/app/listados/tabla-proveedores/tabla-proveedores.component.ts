import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorEntity } from 'src/app/modelo/proveedor-entity';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css']
})
export class TablaProveedoresComponent {
  data: any[]=[];
  proveedorArray: ProveedorEntity[]=[];
  constructor(private apiService:ProveedorService, private router:Router){}
  ngOnInit(): void {
    this.llenarData();
  }
  
 
  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.proveedorArray=data;
      console.log(this.data);
      console.log(this.proveedorArray);
    })
  }
  nuevo(){
    
    this.router.navigate(["ingresarproveedor"]);
  }
 
  actualizar(cod_provee:number){
    this.apiService.cod_provee=cod_provee;
    this.router.navigate(["actualizarproveedor"]);
  }
  eliminar(cod_provee:number){
    console.log(cod_provee);
    this.apiService.eliminarProveedor(cod_provee).subscribe(
      result=>{

        console.log(result);
  
        this.llenarData();
  
      }
    );
  }
}
