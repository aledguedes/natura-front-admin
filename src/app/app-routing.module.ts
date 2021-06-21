import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditarcategoriaComponent } from './componentes/editarcategoria/editarcategoria.component';
import { EditarprodutosComponent } from './componentes/editarprodutos/editarprodutos.component';
import { LoginComponent } from './componentes/login/login.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'categorias', component:CategoriasComponent },
  { path: 'produtos', component:ProdutosComponent },
  { path: 'editarcategoria/:id', component:EditarcategoriaComponent },
  { path: 'editarproduto/:id', component:EditarprodutosComponent },
  { path: 'pedidos', component:PedidosComponent },
  { path: 'clientes', component:ClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
