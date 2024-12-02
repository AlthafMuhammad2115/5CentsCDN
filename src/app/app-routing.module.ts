import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ZoneComponent } from './pages/zone/zone.component';
import { EdgeRuleComponent } from './zone-components/edge-rule/edge-rule.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'zone', component: ZoneComponent ,
    children:[
      {path:'edgerules/criteria',component:EdgeRuleComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
