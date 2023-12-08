import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorEntity } from 'src/app/modelo/proveedor-entity';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-form-proveedoract',
  templateUrl: './form-proveedoract.component.html',
  styleUrls: ['./form-proveedoract.component.css']
})
export class FormProveedoractComponent {
  frmProveedor=new FormGroup({
    cod_provee: new FormControl(''),
    razon: new FormControl(''),
    ruc: new FormControl('')
  }
  )

  proveedor:ProveedorEntity=new ProveedorEntity();

  constructor(private proveedorService:ProveedorService, private router:Router){

  }
  guardarProveedor(){
    this.proveedorService.actualizarProveedores(this.frmProveedor.value).subscribe((result)=>{
      console.log(result);
      this.frmProveedor.reset();
      this.router.navigate(["listar/Proveedores"]);
    }

    )
  }

  ngOnInit(): void {
    this.llenarData();
  
}
llenarData(){
   this.proveedorService.obtenerProveedor().subscribe(data=>{
      this.proveedor=data;
      console.log(this.proveedor);
      this.frmProveedor.controls["cod_provee"].setValue(""+this.proveedor.cod_provee);
      this.frmProveedor.controls["razon"].setValue(this.proveedor.razon);
      this.frmProveedor.controls["ruc"].setValue(this.proveedor.ruc);
     
   }

   )
}
}
