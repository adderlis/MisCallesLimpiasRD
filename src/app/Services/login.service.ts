import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http: HttpClient) { 
  }

  IniciarSesion(usuario:string,constrasena:string){
    return this.http.get("https://localhost:44371/api/MisCallesLimpiasRD/IniciarSesion/"+usuario+"/"+constrasena+"");
    
  }
}
