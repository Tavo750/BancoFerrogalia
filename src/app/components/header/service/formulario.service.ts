import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaNuevaBody } from '../interfaces/cuentaNuevaBodyInterface';
import { ConfirmacionBody } from '../interfaces/confirmacionBodyInterface';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly url = 'https://a20215847.app.n8n.cloud/webhook/1c4d8d02-5e14-4417-93a0-0cb82864130f';

  constructor(private http: HttpClient) { }

  CrearCuentaUsuario(body: CuentaNuevaBody): Observable<any> {
    return this.http.post<any>(this.url, body);
  }
  private readonly url2 = 'https://a20215847.app.n8n.cloud/webhook/91a326fc-32fa-40dc-84f2-c5582731a3dd';

  ValidarUsuario(body: ConfirmacionBody){
    return this.http.post<any>(this.url2, body);
  }
}
