import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getViewData } from '@angular/core/src/render3/state';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {}

  getData(){
    return this.items = this.db.collection('items').valueChanges();
  }
}
