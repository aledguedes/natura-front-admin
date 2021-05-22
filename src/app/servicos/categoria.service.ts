import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http : HttpClient) { }

  public getAllCategorias() {
    let token: string;
    token = localStorage.getItem("LTRTK");

    let header={
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/categoriasbyid", { headers :  header } );
  }
/*  public getAllCategorias() {
    return this.http.get("http://localhost:8080/categorias");
  }*/

  public getById(id:number){
    let token: string;
    token = localStorage.getItem("LTRTK");

    let header={
      'Authorization':token
    }
    return this.http.get("http://localhost:8080/categorias/"+id, { headers :  header } );
  }

  public incluirNovaCategoria(categoria : Categoria){
    let token: string;
    token = localStorage.getItem("LTRTK");

    let header={
      'Authorization': token
    }
    return this.http.post("http://localhost:8080/categorias", categoria, { headers :  header } );
  }

  public atualizarCategoria(categoria : Categoria){
    let token: string;
    token = localStorage.getItem("LTRTK");

    let header={
      'Authorization': token
    }
    return this.http.put("http://localhost:8080/categorias", categoria, { headers :  header } );
  }
}
