import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.css']
})
export class FormProveedoresComponent {
  frmProveedor=new FormGroup({
    cod_provee: new FormControl(''),
    razon: new FormControl(''),
    ruc: new FormControl('')
    
  }
  )

 
  constructor(private proveedorService: ProveedorService, private router:Router){}

  guardarProveedor(){
    console.log(this.frmProveedor.value);
    this.proveedorService.guardarDataProveedores(this.frmProveedor.value).subscribe((result)=>{
      console.log(result);
      this.frmProveedor.reset();
      this.router.navigate(["listar"]);
    })

  }
  
  ngOnInit(): void {
    
    
  }
}
