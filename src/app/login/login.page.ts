import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/Login.service';


import { Platform, LoadingController, ToastController } from "@ionic/angular";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario;
  contrasena;
  datos;

  constructor(
    public servicio:LoginService,
    public toastCtrl: ToastController
  ) { 
    
  }

  ngOnInit() {
  }
  
  onIniciarSesion(){
    let usuario,contrasena;
    usuario = this.usuario;
    contrasena = this.contrasena;
    this.servicio.IniciarSesion(usuario,contrasena).subscribe(data=>{
      this.datos = data;
      window.location.href = "./inicio"
    },
    error=>{
      console.log(error);
    });
  }
  
  // async IniciarSesion(mensaje) {
  //   alert("aa");
  // }
}
