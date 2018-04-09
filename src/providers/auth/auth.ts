import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase";

@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;

  constructor(public http: HttpClient, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    console.log('firebaseAuth.auth.currentUser: ', firebaseAuth.auth.currentUser);
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        console.log('value ', value);
        return value;
      })
      .catch(err => {
        console.log('Error: ', err.message);
      });
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Login was successful!');
        console.log('value: ', value);
        return value;
      })
      .catch(err => {
        console.log('Error: ', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  getCurrentUser() {
    return this.firebaseAuth.auth.currentUser;
  }
}
