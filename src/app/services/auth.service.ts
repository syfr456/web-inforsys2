import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  constructor(public fireservices: AngularFirestore, private afu: AngularFireAuth, private router: Router) { 
    this.afu.authState.subscribe((auth =>{
      this.authState = auth;
    }))
  }
  createNewcontact(Record)
    {
      return this.fireservices.collection('Contact').add(Record);
    }
    save(article){
      return this.fireservices.collection('Artikel').add(article);
    }
    get_Allcontact()
    {
      return this.fireservices.collection('Contact').snapshotChanges();
    }
    delete(id)
    {
      this.fireservices.doc('Contact/' + id).delete();
    }



    //admin blog
    get_Article()
    {
      return this.fireservices.collection('Artikel').snapshotChanges();
    }
    edit(id,record){
      this.fireservices.doc('Artikel/' + id).update(record);
    }
     deleted(id)
    {
      this.fireservices.doc('Artikel/' + id).delete();
    }
  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

registerWithEmail(email: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  

  loginWithEmail(email: string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  signout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/public/home']);
  }
}

function Artikel(Artikel: any) {
  throw new Error('Function not implemented.');
}
