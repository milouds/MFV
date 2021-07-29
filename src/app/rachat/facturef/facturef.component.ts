import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurFacture } from 'src/app/models/facturef.model';
import { Paiement } from 'src/app/models/paiement';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { PaiementService } from 'src/app/services/paiement.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-facturef',
  templateUrl: './facturef.component.html',
  styleUrls: ['./facturef.component.css']
})
export class FacturefComponent implements OnInit {


  facture = new FournisseurFacture();

  facturef:any
  ht: any;
  ttc:any;
  areg:any;
  Net:any=0;

  FactById: any;
  MontantFacture: any;
  values: any;
  rest: any;
  mp:any;
/*   estpayer:any;
 */ 
  estpayer:boolean = false;



  montantPayer=0;
  
 factureSelectionner= new FournisseurFacture();

  p:any;

  paiements:Paiement[]=new Array<Paiement>();
  paiement=new Paiement();

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factureService: FacturesService,private productService:ProductService,private four:FournisseursService,private paiementService:PaiementService) { }
  ngOnInit(): void {
    this.getfacturefdata();
    this.getmp(event);
    this.insert();
  }

 getfacturefdata(){
   this.factureService.getData().subscribe(res=>{
   this.facturef=res;
   console.log("####",this.facturef);
   this.ht=0;
   this.ttc=0;
   this.areg=0;
   for (var i = 0;i <this.facturef.length; i++) {
    this.ht+=this.facturef[i].Total_HT;
    this.ttc+=this.facturef[i].Montant_TTC;
    this.Net+=this.facturef[i].facture;

    }
   });
}

 
payer(facture:FournisseurFacture) {

 this.factureSelectionner= facture;

 this.montantPayer=0;


  this.paiementService.getPaiemenetsOfFacture(facture.id).subscribe(res => {

    this.paiements=res;

    for (var i = 0; i < this.paiements.length; i++) {

      this.montantPayer+= this.paiements[i].paye;
    }
/*     if(this.montantPayer==this.factureSelectionner.Montant_TTC){

      this.estpayer=true;
    }
    else if (this.montantPayer<this.factureSelectionner.Montant_TTC){
      this.estpayer=false;
    } */

  });

  /*
  this.factureService.getFactureById(id).subscribe(res => {
    this.FactById = res;
    
    this.MontantFacture = this.FactById.Montant_TTC;

    
    this.paiement.getFactureById(id).subscribe(res=>{
    this.p=res;
  

   console.log(this.p[0].reste);




    });  */


/*       this.paiement.paye = 0;
*/

//});
}

getmontantReste(){

  this.paiement.reste=this.factureSelectionner.Montant_TTC-this.paiement.paye-this.montantPayer;

}

getmp(mp: any) {

  this.values = mp.target.value;    
   this.p[0].paye = Number(this.p[0].paye) + Number(this.values);

   this.p[0].reste -= this.values;


}

insert() {
  
  this.paiementService.updateData(this.p[0].id,this.p[0]).subscribe(res => {
  });

  console.log(this.p[0]);

 /*  this.facture.Montant_TTC=0;
  this.facture.Montant_TVA=0;
  this.facture.Total_HT=0;
  
  let listAchat: Array<ListProduct> = new Array();
  
  for (var i = 0; i < this.listProduct.length; i++) {
  
    this.facture.Montant_TTC+=this.listProduct[i].Montant_TTC;
    this.facture.Montant_TVA+=this.listProduct[i].Montant_TVA;
    this.facture.Total_HT+=this.listProduct[i].Total_HT;
    this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale; */
  
  }

  createPaiement(){

    this.paiement.id_facture=this.factureSelectionner.id;
    this.paiementService.insertData(this.paiement).subscribe(res => {

      this.paiement=new Paiement();
    });
  }



}
