import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';

import { routing }  from './app.routing';

@NgModule({
  declarations: [
    AppComponent,PageComponent,AboutComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
