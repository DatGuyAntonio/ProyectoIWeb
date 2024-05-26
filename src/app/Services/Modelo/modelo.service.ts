import { Injectable } from '@angular/core';
import { enviroment } from '../../Enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private urlEndpoint: string = enviroment.Urls_Base + 'Modelo';

  constructor(private http: HttpClient) { }

  subirArchivo(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);

    return this.http.post<any>(this.urlEndpoint, formData);
  }
}
