import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;
  status: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, private data: Data) {

  }

  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description,
      status: this.status //need to change this
    };
    this.view.dismiss(newItem);

  }


  close(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddItemPage');
  }

}
