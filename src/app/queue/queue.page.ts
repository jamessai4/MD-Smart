import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    public auth:AuthService,
    private nav: NavController,
    public alertController: AlertController
    ) {
    this.itemCollection = firestore.collection<any>('users' );
    this.items = this.itemCollection.doc(auth.user.uid).valueChanges();
  }

  itemCollection: AngularFirestoreCollection<any>;
  items: any;

  ngOnInit() {
    this.items.subscribe((res:any)=>{
      console.log(res)
    })
  }
  symptom:string;
  date:string;


  async submit(){
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
            const item = {
              symptom: this.symptom,
              date: this.date
            }
            this.itemCollection.doc(this.auth.user.uid).update(item).then(()=>{
              this.symptom=""
              this.date=""
              this.nav.navigateRoot("/landing-page")
            })
          }
        }
      ]
    });

    await alert.present();
  }
  

}

