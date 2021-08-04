import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientsService } from 'src/app/services/clients.service';
import { factureService } from 'src/app/services/facture.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  facture: any;
  ht: any;
  ttc:any;
  Net:any=0;
  ne:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private factService: factureService) { }

  ngOnInit(): void {
    this.getfacturefdata();
  }
  getfacturefdata(){
    this.factService.getData().subscribe(res=>{
    this.facture=res;
    console.log("####",this.facture);
    this.ht=0;
    this.ttc=0;
    this.Net=0;
    this.ne=0;
    for (var i = 0;i <this.facture.length; i++) {
     this.ht+=this.facture[i].Total_HT;
     this.ttc+=this.facture[i].Montant_TTC;
     this.ne=this.facture[i].Montant_TTC+this.facture[i].Timbre_fiscale
     this.Net+=this.ne;
    }
    });
 }

}
