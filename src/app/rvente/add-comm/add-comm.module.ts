import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCommRoutingModule } from './add-comm-routing.module';
import { AddCommComponent } from './add-comm.component';


@NgModule({
  declarations: [AddCommComponent],
  imports: [
    CommonModule,
    AddCommRoutingModule
  ]
})
export class AddCommModule { }
