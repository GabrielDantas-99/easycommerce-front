import { NgModule } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { FocusTrapModule } from 'primeng/focustrap';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [],
  exports: [
    DividerModule,
    TooltipModule,
    FocusTrapModule,
    StyleClassModule,
    RippleModule
  ]
})
export class PrimengModule { }
