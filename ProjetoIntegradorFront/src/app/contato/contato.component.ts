import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  nome: string
  email:string
  assunto:string

  constructor(
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
  }

  enviar(){

      Swal.fire({
        title: 'Mensagem enviada com sucesso, em breve retornaremos o contato!',
        icon: 'success'
      }
      )
      this.router.navigate(['/home'])
    }
}
