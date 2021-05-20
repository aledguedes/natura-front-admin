import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditarcategoriaComponent } from './componentes/editarcategoria/editarcategoria.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'categorias', component:CategoriasComponent },
  { path: 'editarcategoria/:id', component:EditarcategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
