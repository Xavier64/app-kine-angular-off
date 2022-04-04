import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
linkHome = "home"
linkProgramme = "programme"
linkExercice = "exercice"
linkProfil = "profil"
linkContact = "contact"
linkParametre = "parametre"
linkLogin = "login"

}
