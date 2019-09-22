import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OmachyComponent } from './omachy/omachy.component';
import { ContributeComponent } from './contribute/contribute.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'omachy',			component: OmachyComponent },
    { path: 'contribute',		component: ContributeComponent },
    { path: 'about',			component: AboutComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
