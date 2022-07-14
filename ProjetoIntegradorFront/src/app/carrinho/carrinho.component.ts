import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutosService } from '../service/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho = environment.carrinho
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  lProdutos: Produto[]
  soma = 0

  constructor(
    private produtoService: ProdutosService,
    private router: Router
    ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.findProdutoById
    /*this.mostrarProdutos(this.carrinho)*/
    
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
        'Você acabou de nos ajudar a avançar a <b> erradicação da pobreza</b> no mundo!',
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
      //alert('Seu carrinho está vazio!')
    }
  }

 /* mostrarProdutos(array: number[]){
    array.forEach((resp: number)=>{
      let time = this.produtoService.getByIdProdutos(resp)
      this.lProdutos.push(time)
    })*/

    /*
    let x = 0
    while(array.forEach <= x){
      this.produtoService.getByIdProdutos(array[x]).subscribe((resp: Produto)=>{
      this.produto = resp
      this.lProdutos.push(this.produto)
      x = x++ 
      })
    }
    */
  }
