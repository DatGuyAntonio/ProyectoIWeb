import { Injectable } from '@angular/core';
import { enviroment } from '../../Enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndpoint : string = enviroment.Urls_Base + 'Usuario';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any[]>{
    return this.http.get<any[]>(this.urlEndpoint);
  }
  getDatosCliente(correo: any):Observable<any[]>{
    return this.http.get<any[]>(this.urlEndpoint+'/'+correo+'/Obtener_informacion');
  }
  postClienteN(BodyCliente:any):Observable<any[]>{
     return this.http.post<any[]> (this.urlEndpoint, BodyCliente)
  }

  putDesactivarUsuario(correo:any):Observable<any[]>{
    return this.http.put<any[]>(this.urlEndpoint+'/'+correo+'/Desactivar_usuario', {});
}
  getDirecciones(correo:any):Observable<any[]>{
    return this.http.get<any[]>(this.urlEndpoint+'/'+correo+'/Obtener_direccion')
  }
}
