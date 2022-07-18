import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  massas: Categoria = new Categoria()
  listaCategorias: Categoria[];
  listaProdutos: Produto[];
  badge: number
  condition: boolean = false

  carrinho = environment.carrinho

  constructor(
    private router: Router,
    private categoriaService: CategoriasService,
    private produtoService: ProdutosService,
  ) { }

  ngOnInit(){
    window.scroll(0, 0);
    if(environment.token == ''){
      Swal.fire({
        title: 'Seu login expirou, por favor faça login novamente!',
        icon: 'info',
        timer: 3500,
        showConfirmButton: false    
      }
      )
      this.router.navigate(['/login'])
    }
    this.getAllProdutos()
  }

  GetCategoriasById(id: number){
    this.categoriaService.getByIdCategorias(id).subscribe((resp: Categoria) => {
      this.massas = resp
      this.badge=resp.id
      this.condition = true
    })

  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  adCarrinho(id: number){
    this.carrinho.unshift(id)
    Swal.fire({
      title: 'Produto adicionado ao carrinho!',
      icon: 'success'
    })
  }

}
