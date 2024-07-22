import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faBars, faCode, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-nav-modules',
  standalone: true,
  imports: [
    MatIcon,
    FaIconComponent
  ],
  templateUrl: './nav-modules.component.html',
  styleUrl: './nav-modules.component.css'
})
export class NavModulesComponent {

  protected readonly faBars = faBars;
  protected readonly faCode = faCode
  protected readonly faUser = faUser
}
