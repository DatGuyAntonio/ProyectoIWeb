import { Injectable } from '@angular/core';
import { enviroment } from '../../Enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlEndpoint : string = enviroment.Urls_Base + 'Venta';
  constructor(private http: HttpClient) { }

  postVenta(BodyVenta:any):Observable<any[]>{
    return this.http.post<any[]> (this.urlEndpoint, BodyVenta)
 }
 
 getVentas(): Observable<any[]> {
  return this.http.get<any[]>(this.urlEndpoint);
}
}
