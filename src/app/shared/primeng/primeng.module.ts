import { NgModule } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { FocusTrapModule } from 'primeng/focustrap';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  exports: [
    DividerModule,
    TooltipModule,
    FocusTrapModule,
    StyleClassModule,
    RippleModule,
    InputTextModule
  ]
})
export class PrimengModule { }
