import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  // Metodo para persistir um cliente no banco
  salvarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }


  listaClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080//api/clientes');
  }
}
