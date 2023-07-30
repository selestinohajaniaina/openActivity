import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  public check: boolean = false;
  public theme: any = localStorage.getItem('theme');
  public language: string = 'Francais';

  constructor(
    private emailComposer: EmailComposer,
    private alertController: AlertController,
    private call: CallNumber
  ) {}

  async presentAlert(text: string) {
    const alert = await this.alertController.create({
      header: text+' n\'est pas encore disponnible',
      buttons: [
        {
          text: 'Ok',
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
    this.theme = localStorage.getItem('theme');
  }

  handle(event:any) {
    localStorage.setItem('theme',event.detail.value);
    location.reload();
  }

  lang(event:any) {
    if(event.detail.value!='Francais'){
      this.presentAlert(event.detail.value);
      this.language= 'Francais';
    }
  }

  clicked() {
    this.check = !this.check;
    if(this.check) {
      document.body.setAttribute('color-theme','dark');
    }else{
      document.body.setAttribute('color-theme','light');
    }
  }

  signal() {
    this.emailComposer.open({
      to:'selestinoolivier@gmail.com',
      type: 'Erreur dans l\'Application',
    })
  }

  callMe() {
    this.call.callNumber('+261324110923',true);
  }
}
