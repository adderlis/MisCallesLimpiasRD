import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MisreportesService {

  constructor(public http: HttpClient) {
  }

  obtenerMisReportes(){
    return this.http.get('https://localhost:44371/api/MisCallesLimpiasRD/ConsultarListadoDeReportes');
  }


}
