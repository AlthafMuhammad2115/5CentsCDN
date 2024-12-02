import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-btn',
  templateUrl: './hero-btn.component.html',
  styleUrl: './hero-btn.component.css'
})
export class HeroBtnComponent {
  @Input() imgUrl:any;
  @Input() width:any;
}
