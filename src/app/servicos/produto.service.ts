import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http : HttpClient) { }

  public recuperarTodos(){
    return this.http.get("http://localhost:8080/produtos/all");
  }
  
  public uploadFoto(formData: FormData){
    let token: string;
    token = localStorage.getItem("LTRTK");

    let header={
      'Authorization':token
    }
    return this.http.post("http://localhost:8080/produtos/upload", formData, {headers:header});
  }    
}
