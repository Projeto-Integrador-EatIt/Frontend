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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { EditCategoriaComponent } from './edit/edit-categoria/edit-categoria.component';
import { EditProdutoComponent } from './edit/edit-produto/edit-produto.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { TokenInterceptorService } from "./service/token-interceptor.service";
import { CarrinhoComponent } from './carrinho/carrinho.component';




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
    HomeadminComponent,
    EditCategoriaComponent,
    EditProdutoComponent,
    CategoriaDeleteComponent,
    ProdutoDeleteComponent,
    CarrinhoComponent

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
  }, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
