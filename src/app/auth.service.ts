import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,public navCtl: NavController) { }

  user: any;
  

  userchange() {
    this.auth.onAuthStateChanged(user => {
      console.log('user', user)
      this.user = user
    })
  }

  logout(){
    this.auth.signOut()
    .then(res =>{
      this.navCtl.navigateRoot('/home')
    })
  }
}


