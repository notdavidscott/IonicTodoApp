import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title;
  description;
  status;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {

    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.status = this.navParams.get('item').status;

    //console.log('ionViewDidLoad ItemDetailPage');
  }

  radioOption(status){
    this.status = this.status;
    }

    deleteItem(item) {

      this.view.dismiss();
    }
}
