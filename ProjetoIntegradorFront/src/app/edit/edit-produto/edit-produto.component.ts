import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {


  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaProdutos: Produto[]
  listaCategorias: Categoria[]
  idCategoria: number
  

  constructor(
    private produtoService: ProdutosService,
    private categoriaService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(){
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
    let id = this.route.snapshot.params['id']
    this.findByIdProdutos(id)
    this.findAllProdutos()
    this.findByIdCategoria(id)
    this.findAllCategorias()
    
  }
  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }

  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }
 
  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findByIdProdutos(id: number){
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto)=>{
      this.produto= resp
    })
  }

  atualizar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria
    this.produtoService.putProdutos(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      // alert('Produto atualizado com sucesso!')
        Swal.fire({
          title: 'Produto atualizado com sucesso!',
          icon: 'success',
          timer: 3500,
          showConfirmButton: false    
        }
        )
      this.router.navigate(['/homeadmin'])
    })
  }
}