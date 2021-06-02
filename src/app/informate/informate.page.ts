import { Component, OnInit } from '@angular/core';
import { InformateService } from '../Services/informate.service';

@Component({
  selector: 'app-informate',
  templateUrl: './informate.page.html',
  styleUrls: ['./informate.page.scss'], 
})
export class InformatePage implements OnInit {
  posteducacionales
  constructor(public servicio:InformateService) { }

  // onlineVid() {
  //   this.player.play('https://www.youtube.com/watch?v=6JDTVucdSoQ&ab_channel=Ideasen5minutosFAMILIA').then(() => {
  //   }).catch((err) => {
  //     alert(err);
  //   });
  // }

  ngOnInit() {
    this.servicio.obtenerPostEducacionales()
    .subscribe(
      (data)=>{this.posteducacionales = data;},
      (error)=>{console.log(error);}
    )
  }

}
