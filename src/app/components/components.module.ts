import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { PrimengModule } from '../shared/primeng/primeng.module';



@NgModule({
  declarations: [
    SidebarComponent,
    NavComponent,
    SummaryCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimengModule
  ],
  exports: [
    SummaryCardComponent
  ]
})
export class ComponentsModule { }
