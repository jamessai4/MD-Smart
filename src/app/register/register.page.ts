import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private nav: NavController,
    public alertController: AlertController
  ) {
    this.worksCollection = firestore.collection<any>('users')
  }

  ngOnInit() {
  }
  worksCollection: AngularFirestoreCollection<any>;

  name: string;
  age: string;
  idcard: string;
  email: string;
  password: string;
  cpassword: string;

  async submit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            console.log(this.email)
            console.log(this.password)
            this.auth.createUserWithEmailAndPassword(this.email, this.password)
              .then(res => {
                console.log(res)
                this.auth.currentUser.then(user => {

                  const id = this.firestore.createId();
                  const work = {
                    name: this.name,
                    age: this.age,
                    idcard: this.idcard,
                    uid: user.uid
                  }
                  this.worksCollection.doc(user.uid).set(work)
                    .then(() => {
                      this.name = "";
                      this.age = "";
                      this.idcard = "";
                      this.email = "";
                      this.password = "";
                      this.cpassword = "";
                      this.nav.navigateRoot("/login")
                    })

                })
              })
          }
        }
      ]
    });

    await alert.present();
  }

}
