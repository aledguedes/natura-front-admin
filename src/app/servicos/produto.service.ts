import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http : HttpClient) { }

  public recuperarTodos(){
    this.http.get("http://localhost:8080/produtos/all");
  }
}
