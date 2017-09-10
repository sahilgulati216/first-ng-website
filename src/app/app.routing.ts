import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; //import page components
import { PageComponent } from './page/page.component'; //import page components
import { AboutComponent } from './about/about.component'; //import page components

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'page', component: PageComponent },
  { path: '', component: PageComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
