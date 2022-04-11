import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DonComponent } from './pages/don/don.component';
import { ExerciceComponent } from './pages/exercice/exercice.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ParametreComponent } from './pages/parametre/parametre.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ProgrammeComponent } from './pages/programme/programme.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"programme",component:ProgrammeComponent},
  {path:"exercice", component:ExerciceComponent},
  {path:"profil", component:ProfilComponent},
  {path:"contact", component:ContactComponent},
  {path:"parametre", component:ParametreComponent},
  {path:"", component:LoginComponent},
  {path:"don", component:DonComponent},
  {path:"inscription", component:InscriptionComponent},
  {path:"notification", component:NotificationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
