import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ZoneComponent } from './pages/zone/zone.component';
import { NavbarComponent } from './GlobalParts/navbar/navbar.component';
import { SidebarComponent } from './GlobalParts/sidebar/sidebar.component';
import { SideButtonComponent } from './GlobalParts/side-button/side-button.component';
import { HeroSectionComponent } from './GlobalParts/hero-section/hero-section.component';
import { InnerHeroSectionComponent } from './GlobalParts/inner-hero-section/inner-hero-section.component';
import { ButtonComponent } from './zone-components/button/button.component';
import { EdgeRuleComponent } from './zone-components/edge-rule/edge-rule.component';
import { CriteriaComponent } from './zone-components/criteria/criteria.component';
import { NotesComponent } from './dashboard-components/notes/notes.component';
import { HeroBtnComponent } from './GlobalParts/hero-btn/hero-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ZoneComponent,
    NavbarComponent,
    SidebarComponent,
    SideButtonComponent,
    HeroSectionComponent,
    InnerHeroSectionComponent,
    ButtonComponent,
    EdgeRuleComponent,
    CriteriaComponent,
    NotesComponent,
    HeroBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
