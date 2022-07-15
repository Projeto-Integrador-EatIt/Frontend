import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.css']
})
export class SobrenosComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    if(environment.token != ''){
      environment.token = ''
    }
    window.scroll(0,0)
  }

}
