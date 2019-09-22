import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { OmachyModule } from './omachy/omachy.module';
import { ContributeModule } from './contribute/contribute.module';
import { AboutModule } from './about/about.module';
import { ExamplesModule } from './examples/examples.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
	FooterComponent,
	NucleoiconsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    HomeModule,
	OmachyModule,
	ContributeModule,
	AboutModule,
    ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
