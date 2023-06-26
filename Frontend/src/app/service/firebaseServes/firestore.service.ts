import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private itemsCollection: any;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<any>('items');
  }

  getItems(): Observable<any[]> {
    return this.itemsCollection.valueChanges();
  }

  addItem(item: any): Promise<DocumentReference<any>> {
    return this.itemsCollection.add(item);
  }

  updateItem(id: string, item: any): Promise<void> {
    return this.itemsCollection.doc(id).update(item);
  }

  deleteItem(id: string): Promise<void> {
    return this.itemsCollection.doc(id).delete();
  }
}
