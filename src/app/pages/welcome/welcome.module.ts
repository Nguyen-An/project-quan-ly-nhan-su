import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    WelcomeRoutingModule,
    IconsProviderModule,
    DatePipe
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
