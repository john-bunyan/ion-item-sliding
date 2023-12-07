import { Component } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  line1?: IonItemSliding 

  option2enabled: boolean = false

  constructor() {}

  doSomething() {
    console.log("doing something...")
    this.line1?.close()
  }

  doNothing() {
    console.log("doing nothing...")
  }

  dragEvent(event: any, slider: IonItemSliding) {
    this.line1 = slider
    console.log(JSON.stringify(event), slider)
  }

  addOption() {
    this.option2enabled = true
    this.line1?.close()
    this.line1?.open(undefined)
  }

}
