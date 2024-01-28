import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { FutureComponent } from './features/future/future.component';
import { VerticalBannerComponent } from './features/vertical-banner/vertical-banner.component';
import { ButtonComponent } from './shared/button/button.component';
import { SliderComponent } from './features/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    FutureComponent,
    VerticalBannerComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
