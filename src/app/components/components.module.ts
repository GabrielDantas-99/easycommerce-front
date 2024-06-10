import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { TableComponent } from './table/table.component';
import { DateFormatPipe } from '../pipes/date-format.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    NavComponent,
    SummaryCardComponent,
    TableComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimengModule,
  ],
  exports: [
    SummaryCardComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
