import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-button',
  templateUrl: './side-button.component.html',
  styleUrl: './side-button.component.css'
})
export class SideButtonComponent {
  @Input() imgUrl!:String
}
