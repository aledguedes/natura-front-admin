import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http : HttpClient) { }

  public getAllPedidos(){
    let token: string;
    token = localStorage.getItem("LTRTK");
 
    let header={
      'Authorization':token
    }
    return this.http.get("http://localhost:8080/pedidos", {headers: header});
  }

  public alterarStatus(pedido:Pedido, status:number){
    let token = localStorage.getItem("LTRTK");

    let header = {
      'Authorization': token
    }
    return this.http.get("http://localhost:8080/pedidos/"+pedido.idPedido+"?status="+status, { headers: header });
  }
}
