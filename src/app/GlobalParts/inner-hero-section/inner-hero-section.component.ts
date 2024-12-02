import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-hero-section',
  templateUrl: './inner-hero-section.component.html',
  styleUrl: './inner-hero-section.component.css'
})
export class InnerHeroSectionComponent {
  @Input() network :any;
  @Input() name :any;
}
