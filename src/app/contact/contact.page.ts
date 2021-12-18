import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(
    public alertController: AlertController,
  ) { 
    
  }

  ngOnInit() {
  }

  async submit1(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ID : LINE',
      message: 'ทางคลินิกยังไม่มี ID LINE จะมีในเร็วๆนี้ !',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('LOG : ยกเลิกการทำงาน');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('LOG : ยืนยันการทำงาน');
          }
        }
      ]
    });

    await alert.present();
  }

  async submit2(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'PHONE : NUMBER',
      message: 'สามารถติดต่อได้ทุกวัน 10:00 - 21:00 น. !',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('LOG : ยกเลิกการทำงาน');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('LOG : ยืนยันการทำงาน');
          }
        }
      ]
    });

    await alert.present();
  }

}
