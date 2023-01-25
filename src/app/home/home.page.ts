import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth) {    
    this.loginGoogle();
  }

  async loginGoogle() {
    const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = res.user;
    console.log(user);
    // this.picture = user.photoURL;
    // this.name = user.displayName;
    // this.email = user.email;
 }
}
