import {Component, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";
import {UserComponent} from "../../user/user.component";
import {normalizeAssetPatterns} from "@angular-devkit/build-angular/src/utils";
import {MedicComponent} from "../medic/medic.component";
import {PatientComponent} from "../patient/patient.component";
import {SpecialtyComponent} from "../specialty/specialty.component";
import {NgComponentOutlet} from "@angular/common";
import {BisnesComponent} from "../../components/bisnes/bisnes.component";

@Component({
  selector: 'app-source-of-income',
  standalone: true,
  imports: [
    MatIcon,
    MatSlideToggle,
    FormsModule,
    UserComponent,
    NgComponentOutlet
  ],
  templateUrl: './source-of-income.component.html',
  styleUrl: './source-of-income.component.css'
})
export class SourceOfIncomeComponent {

  //como

  bisnes = false
  relations = false
  other = false


  handleToggleChange(toggleName: string) {
    switch (toggleName) {
      case 'bisnes':
        this.relations = false;
        this.other = false;
        break;
      case 'relations':
        this.bisnes = false;
        this.other = false;
        break;
      case 'other':
        this.bisnes = false;
        this.relations = false;
        break;
    }
  }

  isVisibleComponent(): boolean {
    console.log(this.bisnes)
    return this.bisnes
  }

  isButtonSelect: boolean = false

  buttonClicked() {
    this.isButtonSelect = true
  }

  components = [
    {
      name: 'UserComponent',
      component: UserComponent
    },
    {
      name: 'SpecialtyComponent',
      component: SpecialtyComponent
    },
    {
      name: 'BisnesComponent',
      component: BisnesComponent

    }
  ]


  activeComponet = this.components[0]

  hiddenButton(postion: number) {
    if (postion === 0) {
      this.components.splice(postion + 1, 1)
    }
  }

  showComponent(postion: number) {
    this.activeComponet = this.components[postion + 1]
  }

  protected readonly UserComponent = UserComponent;
  protected readonly SpecialtyComponent = SpecialtyComponent;
  protected readonly BisnesComponent = BisnesComponent;
}
