import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {
   
  private items: { title: string } [] = [];

  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('todos'); 

  }
 
  save(data){
    this.storage.set('todos', data);
  }
  
  deleteItem(title: string){
    this.items = this.items.filter((item) => {
      return item.title !== title
    });
    this.storage.set('items', this.items)
  }
 
}