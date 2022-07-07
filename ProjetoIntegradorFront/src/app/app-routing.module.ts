import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';

const routes: Routes = [

  {path:'',redirectTo: 'login', pathMatch:'full'},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'login', component:LoginComponent},
  {path:'sobrenos', component:SobrenosComponent},
  {path:'contato', component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
