import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaNuevaBody } from '../interfaces/cuentaNuevaBodyInterface';
import { ConfirmacionBody } from '../interfaces/confirmacionBodyInterface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly url = 'https://a20215847.app.n8n.cloud/webhook/308903a5-54aa-45af-877e-19b836e8ee7b';

  constructor(private http: HttpClient) { }

  CrearCuentaUsuario(body: CuentaNuevaBody): Observable<any> {
    return this.http.post<any>(this.url, body);
  }
  private readonly url2 = 'https://a20215847.app.n8n.cloud/webhook/91a326fc-32fa-40dc-84f2-c5582731a3dd';

  ValidarUsuario(body: ConfirmacionBody):Observable<any>{
    return this.http.post<any>(this.url2, body);
  }
}
