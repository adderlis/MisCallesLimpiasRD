import { Component, OnInit } from '@angular/core';
import { RecompensasService } from '../Services/recompensas.service';


@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.page.html',
  styleUrls: ['./recompensas.page.scss'],
})
export class RecompensasPage implements OnInit {

  constructor(public servicio:RecompensasService) { }
  recompensas
  
  ngOnInit() {
    this.servicio.obtenerrecompensas()
    .subscribe(
      (data)=>{this.recompensas = data;},
      (error)=>{console.log(error);}
    )
  }
}
