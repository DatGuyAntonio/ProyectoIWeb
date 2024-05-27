import { Injectable } from '@angular/core';
import { enviroment } from '../../Enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private urlEndpoint : string = enviroment.Urls_Base + 'Pedido';
  constructor(private http: HttpClient) { }

  postpedido(Bodypedido:any):Observable<any[]>{
    return this.http.post<any[]> (this.urlEndpoint, Bodypedido)
 }
 getpedidos():Observable<any[]>{
  return this.http.get<any[]> (this.urlEndpoint)
}
}
