import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  constructor(private dialog :MatDialog) {
  }

  modelsSistem = [
    {
      name: 'Modelo de Sistema 1',
      description: 'Descrição do modelo de sistema 1',
      image: 'https://via.placeholder.com/15',
      link: "pages/exam"
    },
    {
      name: 'Modelo de Sistema 2',
      description: 'Descrição do modelo de sistema 2',
      image: 'https://via.placeholder.com/150',
      link: "/pages/consult"
    },
    {
      name: 'Modelo de Sistema 3',
      description: 'Descrição do modelo de sistema 3',
      image: 'https://via.placeholder.com/150',
      link: "/pages/consult"
    }
  ]

}
