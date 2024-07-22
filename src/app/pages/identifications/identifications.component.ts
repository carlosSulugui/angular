import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {
  MatCell, MatCellDef, MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";

@Component({
  selector: 'app-identifications',
  standalone: true,
  imports: [
    MatIcon,
    MatTable,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatCell,
    MatHeaderRowDef,
    MatRowDef,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef
  ],
  templateUrl: './identifications.component.html',
  styleUrl: './identifications.component.css'
})
export class IdentificationsComponent {
  identification = [
    {
      type: "DPI",
      number: "1234567890",
      state: "Activo",
      digatalization: "Si",
    },
    {
      type: "Pasaporte",
      number: "1234567890",
      state: "Activo",
      digatalization: "Si",
    },
    {
      type: "Licencia",
      number: "1234567890",
      state: "Activo",
      digatalization: "Si",
    },
    {
      type: "DPI",
      number: "1234567890",
      state: "Activo",
      digatalization: "Si"
    }
  ]

  colors = [{
    color: "red",
    value: "#f00"
  }, {
    color: "green",
    value: "#0f0"
  }, {
    color: "blue",
    value: "#00f"
  }, {
    color: "cyan",
    value: "#0ff"
  }, {
    color: "magenta",
    value: "#f0f"
  }]


  data = [{
    id: "GT",
    city: "Guatemala",
    country: "Guatemala",
  },
    {
      id: "US",
      city: "Washington",
      country: "Estados Unidos",
    },
    {
      id: "MX",
      city: "Ciudad de Mexico",
      country: "Mexico",
    },
    {
      id: "HN",
      city: "Tegucigalpa",
      country: "Honduras",
    }]

  tableColors = [
     "#fdf7f7",
     "#efeeee"]



}


