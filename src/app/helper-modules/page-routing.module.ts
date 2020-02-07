import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkicamsComponent } from '../pages/skicams/skicams.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';



const aRoutes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'skicams', component: SkicamsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(aRoutes) ],
  exports: [ RouterModule ]
})
export class PageRoutingModule { }
