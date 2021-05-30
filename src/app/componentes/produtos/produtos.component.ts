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

  public destaque(produto: Produto){
    //console.log("Destaqueee = "+produto.id + " destak = "+produto.destaque);
    produto.destaque = (produto.destaque)? 1: 0;
    this.service.atualizarProduto(produto).subscribe(
      (res: Produto) => {
        console.log("Produto "+ res);
      },
      (err) => {
        alert("Erro ao atualizar destaque do Produto "+produto.nome);
      }
    );    
  }
  
  public disponivel(produto: Produto){
    //console.log("Disponivel = "+produto.id + " disp = "+produto.disponivel);
    produto.disponivel = (produto.disponivel)? 1:0;
    this.service.atualizarProduto(produto).subscribe(
      (res: Produto) => {
        console.log("Produto "+ res);
      },
      (err) => {
        alert("Erro ao atualizar disponibilidade do Produto "+produto.nome);
      }
    );
  }
  
}
