import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RventeRoutingModule } from './rvente-routing.module';
import { RventeComponent } from './rvente.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductsComponent } from './editproduct/editproduct.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [RventeComponent, SidebarComponent, TopbarComponent, AsidebarComponent, FooterComponent,AddClientComponent,ClientDetailsComponent,EditClientComponent, AddproductComponent,EditProductsComponent,ProductDetailsComponent],
  imports: [
    CommonModule,
    RventeRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class RventeModule { }
