import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-facturef',
  templateUrl: './facturef.component.html',
  styleUrls: ['./facturef.component.css']
})
export class FacturefComponent implements OnInit {
  facturef:any
  ht: any;
  ttc:any;
  Net:any=0;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factureService: FacturesService,private productService:ProductService,private four:FournisseursService) { }
  ngOnInit(): void {
    this.getfacturefdata();
  }
 getfacturefdata(){
   this.factureService.getData().subscribe(res=>{
   this.facturef=res;
   this.ht=0;
   this.ttc=0;
   this.Net=0;
   for (var i = 0;i <this.facturef.length; i++) {
    this.ht+=this.facturef[i].Total_HT;
    this.ttc+=this.facturef[i].Montant_TTC;
    this.Net+=this.facturef[i].Montant_TTC+this.facturef[i].Timbre_fiscale;
    }
   });
}
}
