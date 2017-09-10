import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PageComponent]
})
export class PageModule { }
