import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css'],
})
export class ProdutoDeleteComponent implements OnInit {
  produto: Produto = new Produto();
  idProduto: number;

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      Swal.fire({
        title: 'Seu login expirou, por favor faça login novamente!',
        icon: 'info',
        timer: 3500,
        showConfirmButton: false,
      });
      this.router.navigate(['/login']);
    }
    window.scroll(0, 0);
    this.idProduto = this.route.snapshot.params['id'];
    this.findByIdProduto(this.idProduto);
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }

  apagar() {
    this.produtoService.deleteProdutos(this.idProduto).subscribe(() => {
      Swal.fire({
        title: 'Produto apagado com sucesso!',
        icon: 'success',
        timer: 3500,
        showConfirmButton: false,
      });
      this.router.navigate(['/homeadmin']);
    });
  }
}
