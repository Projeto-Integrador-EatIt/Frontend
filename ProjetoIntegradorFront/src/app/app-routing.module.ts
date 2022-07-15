import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EditProdutoComponent } from './edit/edit-produto/edit-produto.component';
import { HomeComponent } from './home/home.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { LoginComponent } from './login/login.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';

const routes: Routes = [

  {path:'',redirectTo: 'login', pathMatch:'full'},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'login', component:LoginComponent},
  {path:'sobrenos', component:SobrenosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'home', component: HomeComponent},
  {path: 'edit-categoria/:id', component: EditCategoriaComponent},
  {path: 'edit-produto/:id', component: EditProdutoComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  {path: 'homeadmin', component: HomeadminComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
