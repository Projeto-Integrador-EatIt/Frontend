import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from "./home/home.component";
import { FormsModule } from "@angular/forms";
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EditProdutoComponent } from './edit/edit-produto/edit-produto.component';
=======
import { TesteComponent } from './teste/teste.component';
>>>>>>> a20146ecc560fae72e593e13df881590bafbc73d




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastrarComponent,
    SobrenosComponent,
    ContatoComponent,
    HomeComponent,
<<<<<<< HEAD
    EditCategoriaComponent,
    EditProdutoComponent
=======
    TesteComponent
>>>>>>> a20146ecc560fae72e593e13df881590bafbc73d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
