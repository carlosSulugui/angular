import {Component, ComponentFactoryResolver, Input, signal} from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {AddUserModalComponent} from "../../components/add-user-modal/add-user-modal.component";
import {MatTab, MatTabGroup, MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";
import {ThemePalette} from "@angular/material/core";
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {SpecialtyComponent} from "../specialty/specialty.component";
import {PatientComponent} from "../patient/patient.component";
import {MedicComponent} from "../medic/medic.component";
import {MatIcon} from "@angular/material/icon";
import {MatSelect} from "@angular/material/select";
import {DateBasicComponent} from "../date-basic/date-basic.component";
import {IdentificationsComponent} from "../identifications/identifications.component";
import {AddressComponent} from "../address/address.component";
import {ContactComponent} from "../contact/contact.component";
import {SourceOfIncomeComponent} from "../source-of-income/source-of-income.component";
import {RepresentingComponent} from "../representing/representing.component";

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    AddUserModalComponent,
    MatTabNavPanel,
    MatTabNav,
    MatTabLink,
    RouterLink,
    MatTab,
    MatTabGroup,
    NgIf,
    NgTemplateOutlet,
    NgForOf,
    AsyncPipe,
    SpecialtyComponent,
    PatientComponent,
    MedicComponent,
    NgComponentOutlet,
    MatIcon,
    MatSelect
  ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {

  activeTabIndex: number = 0

  steps =[
    {step: 1, label: 'Ingreso de datos'},
    {step: 2, label:"Revisa la informacion"},
    {step: 3, label: "Confirmacion"}
  ]

  tabs = [
    { label: 'Datos Basicos', component: DateBasicComponent},
    { label: "Identifcación ", component: IdentificationsComponent},
    { label: "Domicilio", component: AddressComponent},
    { label: "Contacto", component: ContactComponent},
    { label: "Fuentes de Ingreso", component: SourceOfIncomeComponent },
    { label: "Representado", component: RepresentingComponent},
    { label: 'Medic', component: MedicComponent },
    { label: 'Patient', component: PatientComponent },
    { label: 'Specialty', component: SpecialtyComponent },
    // Agrega aquí más pestañas si lo necesitas
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserModalComponent);


  }

activeTabs = this.tabs[0]
  protected readonly AddressComponent = AddressComponent;
  protected readonly SpecialtyComponent = SpecialtyComponent;
}
