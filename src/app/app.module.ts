import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing,
    EmailComposer
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
