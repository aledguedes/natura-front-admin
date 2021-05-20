import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.component.html',
  styleUrls: ['./editarcategoria.component.css']
})
export class EditarcategoriaComponent implements OnInit {

  public categoria : Categoria;
  public mode : number; // se for 0 = POST, se 1 = PUT

  constructor(private acRouter:ActivatedRoute, 
              private service:CategoriaService,
              private route: Router) {

    this.categoria = new Categoria();
    let id = this.acRouter.snapshot.params["id"]; 
    //console.log("Meu, é esse o AIDI que vc quer? "+id);

    if(id === "new"){
      //nova categoria
      this.mode = 0;
    }
    else{
      this.mode = 1;
      this.service.getById(id).subscribe(
        (res: Categoria) => {this.categoria = res; },
        (err) => {
          console.log("status do erro = "+err.status);
          if (err.status == 404){

          }
          else{
            // reforçar a segurança
            localStorage.removeItem("LTRTK");
            this.route.navigate(['/']);
          }
        }
      );
    }
  }

  ngOnInit(): void {
  }
  public atualizarCategoria(){
    if (this.mode == 0){
      return this.service.incluirNovaCategoria(this.categoria).subscribe(
        (res: Categoria) => { 
          alert("Categoria cadastrada com sucesso"); 
          this.route.navigate(['/categorias']);
        },
        (err) => {
           if (err.status == 400){
             alert("Valores inválidos para a categoria");
           }
           else{
             localStorage.removeItem("LTRTK");
             alert("Deu ruim man!")
             this.route.navigate(['/']);
           }
        }
      );
    }
    else{
      return this.service.atualizarCategoria(this.categoria).subscribe(
        (res: Categoria) => { 
          alert("Categoria atualizada com sucesso"); 
          this.route.navigate(['/categorias']);
        },
        (err) => {
           if (err.status == 400){
             alert("Valores inválidos para a categoria");
           }
           else{
             localStorage.removeItem("LTRTK");
             this.route.navigate(['/']);
           }
        }
      );
    }
  }
}
