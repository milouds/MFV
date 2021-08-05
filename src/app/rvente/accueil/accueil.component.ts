import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import { clientModel } from 'src/app/models/clients.model';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nbprod: any;
  nbclt: any;
  clients: any;
  constructor(private ProductService:ProductService,private clientService:ClientsService ) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.ProductService.getNumberProduct().subscribe(res=>{
    this.nbprod=res;
  });

  this.getClientsData();
}
getClientsData(){
  this.clientService.getClientData().subscribe(res=>{
  this.clients=res;
  return res;
  });
}
}
