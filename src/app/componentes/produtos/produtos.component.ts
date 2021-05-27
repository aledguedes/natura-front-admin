import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public lista: Produto[] = [];
  constructor(private service : ProdutoService) { 
    this.service.recuperarTodos().subscribe(
      (res : Produto[]) =>{ this.lista = res; }
    );
  }

  ngOnInit(): void {
  }

  public destaque(id : number){
    console.log("Destaque "+id);
  }
  public disponivel(id : number){
    console.log("Disponivel "+id);
  }
  
}
