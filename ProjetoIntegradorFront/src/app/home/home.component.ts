import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Categoria } from '../model/Categoria';
import { CategoriasService } from '../service/categorias.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  massas: Categoria = new Categoria()
  listaCategorias: Categoria[];

  carrinho = environment.carrinho

  constructor(
    private router: Router,
    private categoriaService: CategoriasService,
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    
  }

  GetCategoriasById(id: number){
    this.categoriaService.getByIdCategorias(id).subscribe((resp: Categoria) => {
      this.massas = resp
  })

}



  adCarrinho(id: number){
    this.carrinho.push(id)
    Swal.fire({
      title: 'Produto adicionado ao carrinho!',
      icon: 'success'
    })
  }

}
