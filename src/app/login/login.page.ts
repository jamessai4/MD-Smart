import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 email:string;
 password:string;

  constructor(public auth: AngularFireAuth,private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  login(){
    this.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(res =>{
      this.navCtrl.navigateRoot('/landing-page')
    })
  }

  // gmail(){
  //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
}
