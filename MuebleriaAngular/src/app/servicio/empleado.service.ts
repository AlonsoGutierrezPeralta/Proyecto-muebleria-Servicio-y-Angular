import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private urlApi='empleados';
  private urlApiPost='empleados';
  private urlApiDelete='empleados/'
  private urlApiObtener='empleados/consulta';
  private urlApiPut="empleados/";
  codigo: number = 0;
  
 
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public guardarDataEmpleados(data:any){
    console.log(data);
    return this.http.post(this.urlApiPost,data);
  }

  public eliminarEmpleado(codigo:number){
    console.log(codigo);
    return this.http.delete(this.urlApiDelete+codigo);
  }

  public obtenerEmpleado(){
    console.log(this.codigo);
    return this.http.get<any>(this.urlApiObtener+this.codigo);
  }

  public actualizarEmpleados(data:any){
    console.log(data);
    return this.http.put(this.urlApiPut, data);

  }
}
