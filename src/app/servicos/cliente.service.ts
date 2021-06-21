import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http : HttpClient) { }

  public buscarTodos(){
    let token = localStorage.getItem("LTRTK");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/clientes", { headers: header });
  }

  public buscarPorLetra(letra : String){
    let token = localStorage.getItem("LTRTK");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/clientes/nome/"+letra, { headers: header });
  }

  public buscarPorPalavraChave(keyword : String){
    let token = localStorage.getItem("LTRTK");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/clientes/busca/"+keyword, { headers: header });

  }
}
