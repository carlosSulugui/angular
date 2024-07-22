import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ObserversModule} from "@angular/cdk/observers";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";


export interface Bisnes {
  nameBisnes: string;
  address: string;
  tel: string;
  income: number;
  year: number;
  expenses: number
}
@Component({
  selector: 'app-bisnes',
  standalone: true,
  imports: [
    MatIcon,
    AsyncPipe
  ],
  templateUrl: './bisnes.component.html',
  styleUrl: './bisnes.component.css'
})
export class BisnesComponent {


  bisnes: Bisnes[] = [
    {nameBisnes: 'Bisnes 1', address: 'Address 1', tel: '123456789', income: 1000, year: 2020, expenses: 500},
    {nameBisnes: 'Bisnes 2', address: 'Address 2', tel: '123456789', income: 2000, year: 2020, expenses: 1000}
  ]


  bisnes$ = of(this.bisnes)



}
