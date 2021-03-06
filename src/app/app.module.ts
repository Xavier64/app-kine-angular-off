import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgrammeComponent } from './pages/programme/programme.component';
import { ExerciceComponent } from './pages/exercice/exercice.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ParametreComponent } from './pages/parametre/parametre.component';
import { LoginComponent } from './pages/login/login.component';
import { DonComponent } from './pages/don/don.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './pages/profil/background/background.component';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressComponent } from './pages/profil/background/progress/progress.component';
import { BackgroundhomeComponent } from './pages/home/backgroundhome/backgroundhome.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './components/accordion/accordion.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgrammeComponent,
    ExerciceComponent,
    ProfilComponent,
    ContactComponent,
    ParametreComponent,
    LoginComponent,
    DonComponent,
    NotificationComponent,
    InscriptionComponent,
    NavbarComponent,
    BackgroundComponent,
    ProgressComponent,
    BackgroundhomeComponent,
    AccordionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
