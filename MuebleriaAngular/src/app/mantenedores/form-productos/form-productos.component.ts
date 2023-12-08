import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorEntity } from 'src/app/modelo/proveedor-entity';
import { ProductosService } from 'src/app/servicio/productos.service';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  frmProducto=new FormGroup({
    cod_prov: new FormControl(''),
    cod_provee: new FormControl(''),
    descripcion: new FormControl(''),
    idtipo: new FormControl(''),
    stock: new FormControl(''),
    precio: new FormControl(''),
  }
  )

  constructor(
    private apiService:ProveedorService,
    private productoService: ProductosService, 
    private router:Router
    ){}

  guardarProducto(){
    console.log(this.frmProducto.value);
    this.productoService.guardarDataProductos(this.frmProducto.value).subscribe((result)=>{
      console.log(result);
      this.frmProducto.reset();
      this.router.navigate(["listar"]);
    })

  }
  data: any[]=[];
  proveedorArray: ProveedorEntity[]=[];

  
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
}
