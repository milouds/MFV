import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nbprod:any;
  constructor(private produitservice:ProductService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.produitservice.getNumberProduct().subscribe(res=>{
    this.nbprod=res;
  });
  }}
