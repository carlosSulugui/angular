
import {Component, Inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {UserComponent} from "./user/user.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {NgOptimizedImage} from "@angular/common";
import {MatDivider} from "@angular/material/divider";
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ServiceService} from "./service/service.service";
import {NavComponent} from "./components/nav/nav.component";
import {StartComponent} from "./pages/start/start.component";
import {NavModulesComponent} from "./components/nav-modules/nav-modules.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    UserComponent,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatButton, RouterLink,
    MatMenuTrigger,
    MatMenu, MatMenuItem,
    MatSidenavContainer,
    MatSidenav,
    NgOptimizedImage,
    MatDivider,
    RouterLinkActive,
    MatSidenavModule,
    CommonModule, NavComponent, StartComponent, NavModulesComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular';
  one = 1


  //ejemplo de uso de objeto en typescript
  users = [
    {
      name: 'Juan',
      age: 30,
      email: "test@gmail.com"
    },
    {
      name: 'Pedro',
      age: 25,
      email: "t@tes"
    },
    {
      name: 'Maria',
      age: 40,
      email: "test@.com"
    }, {
      name: 'Carlos',
      age: 35,
      email: "test@.com"
    }, {
      name: 'Luis',
      age: 35,
      email: "test@.com"
    }
  ]


  alerta() {
    alert("hola que tal estoy haciendo click en el boton")
  }

  numberOne = 0
  numberTwo = 0
  result = 0

  keyValue(e: any) {
    const {value} = e.target
    this.numberOne = +value
  }

  keyValueTwo(e: any) {
    const {value} = e.target
    this.numberTwo = +value
  }

  sumar() {
    return this.result = this.numberOne + this.numberTwo
  }

}
