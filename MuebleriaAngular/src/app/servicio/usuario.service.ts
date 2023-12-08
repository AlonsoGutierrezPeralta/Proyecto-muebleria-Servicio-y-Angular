import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi='usuarios';
  private urlApiPost='usuarios';
  private urlApiDelete='usuarios/'
  private urlApiObtener='usuarios/consulta';
  private urlApiPut="usuarios/";
  codigo="";
  
 
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataUsuarios(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarUsuario(codigo:string){
    console.log(codigo);
    return this.http.delete(this.urlApiDelete+codigo);
  }

  public obtenerUsuario(){
    console.log(this.codigo);
    return this.http.get<any>(this.urlApiObtener+this.codigo);
  }

  public actualizarUsuarios(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }
}
