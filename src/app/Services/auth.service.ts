import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
