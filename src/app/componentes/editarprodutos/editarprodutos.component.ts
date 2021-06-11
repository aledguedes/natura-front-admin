import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { PathDTO } from 'src/app/model/PathDTO';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/servicos/categoria.service';
import { ProdutoService } from 'src/app/servicos/produto.service';  

@Component({
  selector: 'app-editarprodutos',
  templateUrl: './editarprodutos.component.html',
  styleUrls: ['./editarprodutos.component.css']
})
export class EditarprodutosComponent implements OnInit {

  public mode: number = 1;
  public listaCategorias: Categoria[] = [];
  public produto: Produto;
  public destaque : boolean;
  public disponivel : boolean;
  public arquivo: File;
  public success : boolean;
  public result: number;
  public mensagemTOAST: string;

  constructor(private activatedRoute: ActivatedRoute,
              private categService  : CategoriaService,
              private produtoService: ProdutoService,
              private router : Router) { 

    this.produto = new Produto();
    let id = this.activatedRoute.snapshot.params["id"];
    if (id === "new"){
      this.mode = 0;
    }
    else{
      // a ideia agora é recuperar o produto pelo ID
      this.produtoService.recuperarPeloId(id).subscribe(
        (res : Produto) =>{
          this.produto = res;
          this.destaque = (this.produto.destaque == 1)? true : false;
          this.disponivel = (this.produto.disponivel == 1)? true : false;
        }
      );
    }
    this.result = 0;

    // independente de qualquer coisa, busco todas as categorias
    this.categService.getAllCategorias().subscribe(
      (res: Categoria[]) => {
        this.listaCategorias = res;
      }
    )
  }

  ngOnInit(): void {
    /*var option = {
      Animation : true,
      delay : 2000
    }
    document.getElementById("toastbtn").onclick = function() {
      var myAlert =document.getElementById('toastNotice');//select id of toast
      var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
      bsAlert.show();//show it
    }*/
  }

  public uploadFoto(){
    const formData = new FormData();
    
    formData.append("arquivo",this.arquivo, this.arquivo.name);
   // formData.append("teste","String de testes, seja o que for");

    console.log(formData.get("arquivo"));
    
    this.produtoService.uploadFoto(formData).subscribe(
      (res: PathDTO) => {  
          this.produto.linkFoto = "/assets/"+res.pathToFile;
      }
    )
  }

  public selectFile(event: any){
    if (!this.arquivo)
      this.arquivo = event.target.files[0];    
  }

  public inserirProduto(){
    this.produto.disponivel = (this.disponivel)?1:0;
    this.produto.destaque = (this.destaque)?1:0;
    console.log(this.produto);
    // NOVO PRODUTO
    if(this.mode == 0){
      this.produtoService.enviarProduto(this.produto).subscribe(
        (res : Produto) => {
          this.result = 1; // ou seja, sucesso
          this.mensagemTOAST = "Produto inserido com sucesso!";
          //alert( "Produto inserido com sucesso!");
          document.getElementById("btnModal").click();
        }, 
        (err) => {
          this.result = -1; // ou seja, erro
          this.mensagemTOAST = "Erro ao inserir produto!";
          //alert("Erro ao inserir produto!");
          document.getElementById("btnModal").click();
        }
      );
    }
    //ATUAZLIZAR PRODUTO
    else{
      this.produto.disponivel = (this.disponivel)?1:0;
      this.produto.destaque = (this.destaque)?1:0;

      this.produtoService.atualizarProduto(this.produto).subscribe(
        (res : Produto) => {
          this.result = 1; // ou seja, sucesso
          this.mensagemTOAST = "Produto atualizado com sucesso!";
          //alert( "Produto inserido com sucesso!");
          document.getElementById("btnModal").click();
        }, 
        (err) => {
          this.result = -1; // ou seja, erro
          this.mensagemTOAST = "Erro ao atualizar o produto!";
          //alert("Erro ao inserir produto!");
          document.getElementById("btnModal").click();
        } 
      ); 
    }
  }
  
  public fecharModal() {
    if (this.result == 1) {
      this.router.navigate(['/produtos']);
    }
  }
}
