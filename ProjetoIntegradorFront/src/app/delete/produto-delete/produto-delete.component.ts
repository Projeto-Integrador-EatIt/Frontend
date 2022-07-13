import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)

  }

  findByIdProduto(id: number){
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

  apagar(){
    this.produtoService.deleteProdutos(this.idProduto).subscribe(()=>{
      alert('Produto apagado com sucesso!')
      this.router.navigate(['/produto-delete'])
    })
  }


}
