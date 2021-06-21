import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public listaLetras: string[];
  public keyword: string;

  public lista: Cliente[];
  public modo: number;  // 0-full  - 1-letra  - 2-keyword

  constructor(private route: ActivatedRoute, private service: ClienteService,
    private router: Router) {


    let letra: string = "A";
    this.listaLetras = [];

    for (let i = 0; i < 26; i++) {
      letra = String.fromCharCode(65 + i);
      this.listaLetras.push(letra);
    }

    this.route.queryParams.subscribe(
      (parameters) => {
        if (parameters['letra']) {
          this.service.buscarPorLetra(parameters['letra']).subscribe(
            (res: Cliente[]) => { this.lista = res }
          );
        }
        else if (parameters['keyword']) {
          this.service.buscarPorPalavraChave(parameters['keyword']).subscribe(
            (res: Cliente[]) => { this.lista = res }
          );
        }
        else {
          this.service.buscarTodos().subscribe(
            (res: Cliente[]) => { this.lista = res });
        }
      }
    );
  }

  ngOnInit(): void {
    
  }


  public buscarPorPalavraChave() {
    this.router.navigate(['clientes'], { queryParams: { keyword: this.keyword } });
  }

  public isBirthday(dataNasc: string): boolean {
    if (dataNasc) {
      let hoje: Date = new Date();
      let mesHoje = hoje.getMonth() + 1;
      let diaHoje = hoje.getDate();
     // console.log(dataNasc);
      let mesNasc = dataNasc.substr(5, 2);
      let diaNasc = dataNasc.substr(8, 2);

      //console.log("HOJE = "+diaHoje + "/"+mesHoje);
      return (mesHoje == parseInt(mesNasc) && diaHoje == parseInt(diaNasc));
    }
    return false;
  }
}
