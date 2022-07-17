import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token != ''){
      environment.token = ''
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
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.id = this.usuarioLogin.id
      environment.foto = this.usuarioLogin.foto

      this.router.navigate(['/home'])
    }, erro =>{
      if(erro.status == 401){
        
          Swal.fire({
            title: 'Usuário ou senha errados!',
            icon: 'error',
            timer: 3500,
            showConfirmButton: false    
          }
          )
      
      }
    })
  }

}
