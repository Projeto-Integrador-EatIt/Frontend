import { Router } from '@angular/router';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho = environment.carrinho
  produto: Produto = new Produto()
  listaProdutos: Array<Produto> = []
  soma = 0

  constructor(
    private produtoService: ProdutosService,
    private router: Router
    ) { }

  ngOnInit() {
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
    window.scroll(0,0)
    this.carrinhoCompleto()
  }

  findProdutoById(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto)=>{
      this.produto = resp
      this.soma += this.produto.valor
      this.listaProdutos.push(this.produto)
    })
  }

  carrinhoCompleto() {
    for(let item in this.carrinho){
      if(this.carrinho[item] > 0) {
        let id = this.carrinho[item]
        this.findProdutoById(id)
      }
    }
  }

  removerProduto(produto: Produto){
    const index = this.listaProdutos.indexOf(produto)
    if(index !== -1){
      this.listaProdutos.splice(0, 1)
      environment.carrinho.splice(index, 1)
      this.soma -= this.produto.valor
      if(this.listaProdutos.length == 0 ){
        this.soma = 0
      }
    }
    Swal.fire({
      title: 'Produto removido!',
      icon: 'success'
    })
    
  }

  

  finalizarCompra() {
    if(environment.token == '') {
      Swal.fire({
        title: 'Você precisa estar logado!',
        icon: 'warning'        
      }
      )
      this.router.navigate(['/login'])
      // alert('Você precisa estar logado!')
      
    } else if(this.listaProdutos.length > 0) {
      Swal.fire(
        'Muito obrigado pela compra!',
        'Você acabou de nos ajudar a acabar com a <b>Fome</b> no mundo!',
        'success'
        //,
        //confirmButtonText: 'Cool',
        //confirmButtonColor: ''
    )
      // alert('Muito obrigado pela compra!')
      this.listaProdutos = []
      environment.carrinho = [0]
      this.router.navigate(['/home'])
    } else {
      Swal.fire({
        title: 'Seu carrinho está vazio!',
        icon: 'warning'        
      }
      )
    }
  }



}