import {Component, Inject, OnInit} from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {AsyncPipe, JsonPipe, NgOptimizedImage} from "@angular/common";
import {Pokemon} from "../../model/model-pockemon";
import {catchError, EMPTY, Observable} from "rxjs";
import {StartComponent} from "../start/start.component";

@Component({
  selector: 'app-consult',
  standalone: true,
  imports: [
    AsyncPipe,

    JsonPipe,
    NgOptimizedImage,
    StartComponent
  ],
  templateUrl: './consult.component.html',
  styleUrl: './consult.component.css'
})
export class ConsultComponent implements OnInit {

  public pockemon$!: Observable<Pokemon>
  errorMessage = ''
  data = {}

  constructor(private httpService: ServiceService) {}


  ngOnInit() {
    this.pockemon$ = this.httpService.getAllPokemon()
  }
}
