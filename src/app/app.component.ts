import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers : [ConfigService]
})
export class AppComponent {
  title = 'app_kine_angular';

constructor ( private configService: ConfigService){}

ngOnInit(): void {
const toto = this.configService.getData();
}

onChercher() {
  console.log("click ok");
  const toto = this.configService.Exercice().subscribe(data => console.log(data)
  );

}


}
