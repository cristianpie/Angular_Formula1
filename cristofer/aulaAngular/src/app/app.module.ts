import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { StudentComponent } from './student/student.component';
import { TesteComponent } from './teste/teste.component';

import {ROUTES} from './app.routes';
import { RouterModule } from '@angular/router';
import { SithsComponent } from './siths/siths.component';
import { FerrariComponent } from './ferrari/ferrari.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    BodyComponent,
    StudentComponent,
    TesteComponent,
    SithsComponent,
    FerrariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
