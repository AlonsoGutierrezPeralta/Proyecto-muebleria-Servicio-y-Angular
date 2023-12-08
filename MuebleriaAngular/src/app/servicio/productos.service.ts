import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private urlApi='productos';
  private urlApiPost='productos';
  private urlApiDelete='productos/'
  private urlApiObtener='productos/consulta';
  private urlApiPut="productos/";
  cod_prod: number = 0;
  
 
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataProductos(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarProducto(cod_prod:number){
    console.log(cod_prod);
    return this.http.delete(this.urlApiDelete+cod_prod);
  }

  public obtenerProducto(){
    console.log(this.cod_prod);
    return this.http.get<any>(this.urlApiObtener+this.cod_prod);
  }

  public actualizarProductos(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }
}
