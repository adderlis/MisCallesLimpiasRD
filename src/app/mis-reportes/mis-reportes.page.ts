import { Component, OnInit } from '@angular/core';
import { MisreportesService } from '../Services/misreportes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mis-reportes',
  templateUrl: './mis-reportes.page.html',
  styleUrls: ['./mis-reportes.page.scss'],
})
export class MisReportesPage implements OnInit {
  reportes
  
  constructor(public servicio:MisreportesService) { }
 
  ngOnInit() {
    this.servicio.obtenerMisReportes()
    .subscribe(
      (data)=>{this.reportes = data;},
      (error)=>{console.log(error);}
    )
  }

}
