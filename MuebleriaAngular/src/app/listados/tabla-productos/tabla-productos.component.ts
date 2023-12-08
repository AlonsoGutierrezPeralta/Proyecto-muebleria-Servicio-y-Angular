import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoEntity } from 'src/app/modelo/producto-entity';
import { ProductosService } from 'src/app/servicio/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent {
  data: any[]=[];
  productoArray: ProductoEntity[]=[];
  constructor(private apiService:ProductosService, private router:Router){}
  ngOnInit(): void {
    this.llenarData();
  }
  
 
  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.productoArray=data;
      console.log(this.data);
      console.log(this.productoArray);
    })
  }
  nuevo(){
    
    this.router.navigate(["ingresarproducto"]);
  }
 
  actualizar(cod_prod:number){
    this.apiService.cod_prod=cod_prod;
    this.router.navigate(["actualizarproducto"]);
  }
  eliminar(cod_prod:number){
    console.log(cod_prod);
    this.apiService.eliminarProducto(cod_prod).subscribe(
      result=>{

        console.log(result);
  
        this.llenarData();
  
      }
    );
  }

}
