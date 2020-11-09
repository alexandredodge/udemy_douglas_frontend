import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl:string = environment.apiUrl;

  constructor( private http : HttpClient ) { }

  salvar(cliente : Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>(`${this.apiUrl}/api/clientes`, cliente);
  }
  
  atualizar(cliente: Cliente) : Observable<any>{
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  buscarTodosClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  getClientesById(id:number) : Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  deletar(cliente:Cliente) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }

}
