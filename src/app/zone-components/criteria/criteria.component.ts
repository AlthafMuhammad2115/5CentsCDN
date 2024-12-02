import { Component, Input } from '@angular/core';
import { EdgeRuleComponent } from '../edge-rule/edge-rule.component';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrl: './criteria.component.css',
})
export class CriteriaComponent {
  btnIPList: string[] = [];
  value: string = '';
  @Input() number: any;
  @Input() index: any;

  constructor(private edge: EdgeRuleComponent) {}
  // delete a criteria
  delete() {
    console.log(this.index);
    
    this.edge.criteria.splice(this.index, 1);
  }

  // add ip btn
  onEnter() {
    this.btnIPList.push(this.value);
    this.value = '';
  }

  // delete btn
  deleteip(index: number) {
    this.btnIPList.splice(index, 1);
  }
}
