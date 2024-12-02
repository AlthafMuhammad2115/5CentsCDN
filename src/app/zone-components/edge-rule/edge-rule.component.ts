import { Component } from '@angular/core';

@Component({
  selector: 'app-edge-rule',
  templateUrl: './edge-rule.component.html',
  styleUrl: './edge-rule.component.css',
})
export class EdgeRuleComponent {
  criteria: number[] = [1];
  public list: string[] = [
    'Caching',
    'Compressible',
    'Objects',
    'CSS',
    'Javascript',
    'Fonts', 
    'Images',
    'Files',
    'HTML Pages',
    'HTM Pages',
    'Static Objects',
    'Uncacheable',
    'Responses',
    'Prefetch Objects',
    'Disable Prefetch',
    'BOTS',
    'Adaptive Image',
    'Compression',
    'm3u8 revalidate',
  ];
  constructor() {
    
  }
  len = this.criteria.length;
  // add a criteria box
  onclick() {
    this.criteria.push(this.criteria.length + 1);
  }
  // delete a criteria box
  ondelete() {
    this.criteria.pop();
  }
}
