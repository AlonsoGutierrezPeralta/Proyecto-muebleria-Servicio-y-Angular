import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoEntity } from 'src/app/modelo/producto-entity';
import { ProveedorEntity } from 'src/app/modelo/proveedor-entity';
import { ProductosService } from 'src/app/servicio/productos.service';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-form-productoact',
  templateUrl: './form-productoact.component.html',
  styleUrls: ['./form-productoact.component.css']
})
export class FormProductoactComponent {
  frmProducto=new FormGroup({
    cod_prod: new FormControl(''),
    cod_provee: new FormControl(''),
    descripcion: new FormControl(''),
    idtipo: new FormControl(''),
    stock: new FormControl(''),
    precio: new FormControl('')
  }
  )

  producto:ProductoEntity=new ProductoEntity();

  constructor(private apiService:ProveedorService, private productoService:ProductosService, private router:Router){

  }
  guardarProducto(){
    this.productoService.actualizarProductos(this.frmProducto.value).subscribe((result)=>{
      console.log(result);
      this.frmProducto.reset();
      this.router.navigate(["listar/Productos"]);
    }

    )
  }

  data: any[]=[];
  proveedorArray: ProveedorEntity[]=[];

  
 

  llenarDataproveedor(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.proveedorArray=data;
      console.log(this.data);
      console.log(this.proveedorArray);
    })
  }
  ngOnInit(): void {
    this.llenarData();
    this.llenarDataproveedor();
}
llenarData(){
   this.productoService.obtenerProducto().subscribe(data=>{
      this.producto=data;
      console.log(this.producto);
      this.frmProducto.controls["cod_prod"].setValue(""+this.producto.cod_prod);
      this.frmProducto.controls["cod_provee"].setValue(""+this.producto.cod_provee);
      this.frmProducto.controls["descripcion"].setValue(this.producto.descripcion);
      this.frmProducto.controls["idtipo"].setValue(""+this.producto.idtipo);
      this.frmProducto.controls["stock"].setValue(""+this.producto.stock);
      this.frmProducto.controls["precio"].setValue(""+this.producto.precio);
   }

   )
}
}
