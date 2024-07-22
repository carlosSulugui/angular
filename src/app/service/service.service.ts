import {Inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, delay, Observable, ObservableInput, throwError} from "rxjs";
import {Pokemon} from "../model/model-pockemon";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) {}

  private url = `${environment.baseURL}pokemon`


  //como puedo hacer que regrese el objeto pockemon

  getAllPokemon(): Observable<any> {
    return this._http.get<Pokemon>(this.url).pipe(delay(5000))
  }
}
