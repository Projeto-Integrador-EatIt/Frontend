import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
    window.scroll(0,0)
  }

}
