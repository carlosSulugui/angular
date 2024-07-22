import {Component, computed, effect, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-representing',
  standalone: true,
  imports: [
    MatIcon,
    MatSlideToggle
  ],
  templateUrl: './representing.component.html',
  styleUrl: './representing.component.css'
})
export class RepresentingComponent{
  counter = signal<number>(0)

  double = computed(() => this.counter() * 2)

  constructor() {
    effect(() => console.log('Counter:', this.counter()))
  }
  increment():void {
    this.counter.update((current) => current + 1)
  }

  decrement():void {
    this.counter.update((current)=> current  - 1 )
  }

  reset() {
    this.counter.set(0)
  }


}
