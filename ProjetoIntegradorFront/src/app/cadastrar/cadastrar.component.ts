import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmSenha: String
  tipoUsuario: String

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

    window.scroll(0,0)

  }

  confirmarSenha(event:any){

    this.confirmSenha = event.target.value

  }

  cadastrar(){
    if(this.usuario.senha != this.confirmSenha){
      Swal.fire({
        title: 'As senhas devem ser iguais.',
        icon: 'warning'        
      }
      )
    }else{
      this.authService
      .cadastrar(this.usuario)
      .subscribe((resp: Usuario)=>{
        this.usuario = resp
        this.router.navigate(['/login'])
        Swal.fire({
          title: 'Usuário cadastrado com sucesso!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false        
        }
        )
        
      })
    }
  }
}
