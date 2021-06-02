import { Component } from '@angular/core';
import { Environment } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'mail' },
    { title: 'Mis Reportes', url: '/mis-reportes', icon: 'paper-plane' },
    { title: 'Mis Puntos', url: '/mis-puntos', icon: 'heart' },
    { title: 'Informate', url: '/informate', icon: 'book' },
    { title: 'Acerca de', url: '/acercade', icon: 'book' },
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(platform: Platform ){
    platform.ready().then(() => {
        if (document.URL.startsWith('http')){
          Environment.setEnv({
            API_KEY_FOR_BROWSER_RELEASE: "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50",
            API_KEY_FOR_BROWSER_DEBUG: "AIzaSyABac4fl7IWEhoH7cQr-p-het84Kz12g50"
          });
        }
    });
   }
}
