import { Component } from '@angular/core';
import {
  MatCalendar,
  MatDatepicker,
  MatDatepickerInput, MatDatepickerModule,
  MatDatepickerToggle, MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {MatFormField, MatFormFieldModule, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-date-basic',
  standalone: true,
  imports: [
    MatCalendar,
    MatDatepicker,
    MatLabel,
    MatDatepickerInput,
    MatHint,
    MatDatepickerToggle,
    MatSuffix,
    MatFormField,
    MatInput,
    MatDateRangePicker,
    MatDateRangeInput,
    MatFormFieldModule, MatDatepickerModule, MatIcon, MatSlideToggle, FaIconComponent
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './date-basic.component.html',
  styleUrl: './date-basic.component.css'
})
export class DateBasicComponent {

  protected readonly faSmile = faSmile;

}
