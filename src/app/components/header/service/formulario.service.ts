import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaNuevaBody } from '../interfaces/cuentaNuevaBodyInterface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly url = 'https://a20215847.app.n8n.cloud/webhook/308903a5-54aa-45af-877e-19b836e8ee7b';

  constructor(private http: HttpClient) { }

  CrearCuentaUsuario(body: CuentaNuevaBody): Observable<any> {
    return this.http.post<any>(this.url, body);
  }
}
