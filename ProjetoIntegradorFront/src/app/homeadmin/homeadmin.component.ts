import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriasService } from '../service/categorias.service';
import { ProdutosService } from '../service/produtos.service';


@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  produto: Produto = new Produto()
  listaProdutos: Produto[] 


  idCategoria: number


  constructor(
    private categoriaService: CategoriasService,
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    window.scroll(0,0)
    this.getAllCategorias()
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
    this.getAllProdutos()
    
  }

  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategorias(this.idCategoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })
  }
  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  cadastrar(){
    this.categoriaService.postCategorias(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      alert('Categoria cadastrada com sucesso!')
      this.getAllCategorias()
      this.categoria = new Categoria()
    })
 }

 apagar(){

  this.produtoService.deleteProdutos(this.idCategoria).subscribe(()=>{
    alert('Produto apagado com sucesso!')
    this.router.navigate(['/homeadmin'])
  })


  this.categoriaService.deleteCategorias(this.idCategoria).subscribe(()=>{
    alert('Categoria apagada com sucesso!')
    this.router.navigate(['/homeadmin'])
  })
}

 publicar(){
  this.categoria.id = this.idCategoria
  this.produto.categoria = this.categoria

  this.produtoService.postProdutos(this.produto).subscribe((resp: Produto) => {
    this.produto = resp
    alert('Produto cadastrado com sucesso!')
    this.produto = new Produto()
    this.getAllProdutos()
  })
 }

}
