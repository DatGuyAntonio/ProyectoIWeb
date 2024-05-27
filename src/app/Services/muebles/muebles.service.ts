import { Injectable } from '@angular/core';
import { enviroment } from '../../Enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MueblesService {
  private urlEndpoint : string = enviroment.Urls_Base + 'Mueble';

  constructor(private http: HttpClient) { }

  getMuebles(): Observable<any[]>{
    return this.http.get<any[]>(this.urlEndpoint);
  }
  
  putMueblesP(codigo:any, bodyMueble:any): Observable<any[]>{
    return this.http.put<any[]>(this.urlEndpoint+'/'+codigo+'/Modificar_precio',bodyMueble);
  }

  putMueblesS(codigo:any, bodyMueble:any): Observable<any[]>{
    return this.http.put<any[]>(this.urlEndpoint+'/'+codigo+'/Modificar_stock',bodyMueble);
  }

  putMueblesDes(codigo:any): Observable<any[]>{
    return this.http.put<any[]>(this.urlEndpoint+'/'+codigo+'/Desabilitar_mueble',{});
  }
  
}
