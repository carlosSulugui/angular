import { Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {ConsultComponent} from "./pages/consult/consult.component";
import {ConsultAutocompleteComponent} from "./pages/consult-autocomplete/consult-autocomplete.component";
import {ExamComponent} from "./pages/exam/exam.component";
import {MedicComponent} from "./pages/medic/medic.component";
import {PatientComponent} from "./pages/patient/patient.component";
import {SpecialtyComponent} from "./pages/specialty/specialty.component";

//como definir rutas


export const routes: Routes = [

  {path: "", component: ConsultComponent},
  {path: "pages/consult-autocomplete", component: ConsultAutocompleteComponent},
  {path: "pages/exam" , component: ExamComponent},
  {path: "pages/medic", component: MedicComponent},
  {path:  "pages/patient", component: PatientComponent},
  {path: "pages/specialty", component: SpecialtyComponent}
];
