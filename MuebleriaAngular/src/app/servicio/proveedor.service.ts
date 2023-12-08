import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private urlApi='proveedores';
  private urlApiPost='proveedores';
  private urlApiDelete='proveedores/'
  private urlApiObtener='proveedores/consulta';
  private urlApiPut="proveedores/";
  cod_provee: number = 0;
  
 
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataProveedores(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarProveedor(cod_provee:number){
    console.log(cod_provee);
    return this.http.delete(this.urlApiDelete+cod_provee);
  }

  public obtenerProveedor(){
    console.log(this.cod_provee);
    return this.http.get<any>(this.urlApiObtener+this.cod_provee);
  }

  public actualizarProveedores(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }
}
