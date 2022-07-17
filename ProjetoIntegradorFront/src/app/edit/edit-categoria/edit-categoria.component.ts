import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriasService } from 'src/app/service/categorias.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  

  constructor(
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
    
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }



  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategorias(id).subscribe((resp: Categoria)=>{
      this.categoria= resp
    })
  }

  atualizar(){
    this.categoriaService.putCategorias(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      
        Swal.fire({
          title: 'Categoria atualizada com sucesso!',
          icon: 'success',
          timer: 3500,
          showConfirmButton: false    
        }
        )
       
      this.router.navigate(['/homeadmin'])
    })
  }

}