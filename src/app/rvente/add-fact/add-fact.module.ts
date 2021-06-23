import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFactRoutingModule } from './add-fact-routing.module';
import { AddFactComponent } from './add-fact.component';


@NgModule({
  declarations: [AddFactComponent],
  imports: [
    CommonModule,
    AddFactRoutingModule
  ]
})
export class AddFactModule { }
