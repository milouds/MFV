import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddevisRoutingModule } from './adddevis-routing.module';
import { AdddevisComponent } from './adddevis.component';


@NgModule({
  declarations: [AdddevisComponent],
  imports: [
    CommonModule,
    AdddevisRoutingModule
  ]
})
export class AdddevisModule { }
