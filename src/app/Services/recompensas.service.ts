import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecompensasService {

  constructor(public http: HttpClient) { }

  obtenerrecompensas(){
    return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadodeRecompensas');
  }

}
