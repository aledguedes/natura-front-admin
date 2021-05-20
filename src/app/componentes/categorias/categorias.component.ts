import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public lista : Categoria[] = [];
  constructor(private catService:CategoriaService, private router : Router) {

      //this.lista = new Categoria[];
    }
  ngOnInit(): void {
    if(!localStorage.getItem("LTRTK")){
      this.router.navigate(['/']);
    }

    this.catService.getAllCategorias().subscribe(
      (res:Categoria[]) => { this.lista = res; },
      (err) => { this.router.navigate(['/']); }
    );
  }

}
