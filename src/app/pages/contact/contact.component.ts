import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatChipSet} from "@angular/material/chips";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatIcon,
    MatChipSet,
    MatSlideToggle,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor() {
  }
  edit: boolean = false
}
