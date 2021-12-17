import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    public auth:AuthService) {
      this.itemCollection = firestore.collection<any>('users' );
      this.items = this.itemCollection.doc(auth.user.uid).valueChanges();
  }

  itemCollection: AngularFirestoreCollection<any>;
  items: any;

  test:string;

  ngOnInit() {
    this.items.subscribe((res:any)=>{
      console.log(res)
    })
  }

}
