import { Component, OnInit } from '@angular/core';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nbprod:any;
  nbfn:any;
  fournisseur:any;
  nf:any;

  constructor(private ProductService:ProductService,private fournisseurService:FournisseursService,private facturefservice:FacturesService) { }

  ngOnInit(): void {
    this.get();

    this.getClientsData();
  }
  get(){
    this.ProductService.getNumberProduct().subscribe(a=>{
    this.nbprod=a;
  });
   
}
getClientsData(){
  this.fournisseurService.getfournisseurData().subscribe(res=>{
  this.fournisseur=res;
  });
}
}
