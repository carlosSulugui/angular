import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import { GoogleMapsModule } from '@angular/google-maps'
import {CommonModule, NgOptimizedImage} from "@angular/common";
;
@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
    MatIcon,
    CommonModule,
    GoogleMapsModule,
    NgOptimizedImage
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  constructor() {
  }

  ngOnInit(): void {}
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 31.51679331043587,
    lng: 74.35149289364826
  };
  zoom = 4;
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
