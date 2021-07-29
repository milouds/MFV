import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bondereception } from 'src/app/models/bondereception.model';
import { FournisseurFacture } from 'src/app/models/facturef.model';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { Listproductb } from 'src/app/models/listproductb.model';
import { BonrecService } from 'src/app/services/bonrec.service';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addbonrec',
  templateUrl: './addbonrec.component.html',
  styleUrls: ['./addbonrec.component.css']
})
export class AddbonrecComponent implements OnInit {


  products: any;
  ress: any;
  p: any;
  q:any;
  TTC:any;
  HT:any;
  libelle:any
  TOT_HT:any;
  TOT_TTC:any;
  factures: any;
  TAXA:any;
  MONTANT_TVA:any;  
  values: any;
  index_fournisseur:any;


  f:any;
  fournisseur =new FournisseurModel();
  bondereception = new Bondereception();
  Net: any;
  prod:any;
  listProduct: Bondereception[] = [new Bondereception()];
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private BonrecService: BonrecService,private productService:ProductService,private four:FournisseursService) { }

  ngOnInit(): void {
    this.getfournisseur();
    this.bondereception.Timbre_fiscale=0.6;
    this.getProductsData()
    this.getproduits();
    this.bondereception.Montant_TTC=0;
    this.bondereception.Montant_TVA=0;
  }
  add(){
    let fact = new Bondereception();
    this.listProduct.push(fact);
  }
  getProductsData() {
    this.BonrecService.getData().subscribe(res => {
    this.factures = res;
    });
  }
  insertData() {
    console.log(this.bondereception);
    this.bondereception.Etat="non payé";
    this.bondereception.Timbre_fiscale=0.6;
    this.bondereception.Nom_fournisseur=this.f[this.index_fournisseur].NOM
    this.bondereception.id_fournisseur=this.f[this.index_fournisseur].id
    this.bondereception.quantite_entre=999;
    let listAchat: Array<Listproductb> = new Array();
    for (var i = 0; i < this.listProduct.length; i++) {
      let product = new Listproductb();
      product.quantite=this.listProduct[i].quantite_entre;
      product.id_product=this.listProduct[i].id;
      product.Libelle=this.listProduct[i].Libelle;
      listAchat.push(product);
    }
    this.bondereception.ListProductb=listAchat;
    this.BonrecService.insertData(this.bondereception).subscribe(res => {
    });
    this.router.navigate(['rachat/achat/bonrcp']);
    this.toastr.success('', ' Bon de Reception Enregistrée');
  }
  getproduits() {
    this.productService.getData().subscribe(res => {
    this.products=res;
    });
  }
  getfournisseur(){
    this.four.getfournisseurData().subscribe(res => {
    this.f = res;
    });
  }
  getSelecteItem(prod:any) {
    this.productService.getProductById(prod.id_product).subscribe(res => {
    prod.product=res;
    console.log(prod);
    });
  }
  getq(prod:any) {
    let qte=prod.quantite_entre;
    prod.Montant_TVA=((prod.product.priceht*prod.product.TVA)/100)*qte;
    prod.Taxe_Applique=prod.product.typetaxe;
    prod.Montant_TTC=qte*prod.product.pricettc;
    prod.Total_HT=qte*prod.product.priceht;
    this.bondereception.Montant_TTC=0;
    this.bondereception.Montant_TVA=0;
    this.bondereception.Total_HT=0;
    for (var i = 0; i < this.listProduct.length; i++) {
    this.bondereception.Montant_TTC+=this.listProduct[i].Montant_TTC;
    this.bondereception.Montant_TVA+=this.listProduct[i].Montant_TVA;
    this.bondereception.Total_HT+=this.listProduct[i].Total_HT;
    this.Net=this.bondereception.Montant_TTC+this.bondereception.Timbre_fiscale;
}
}
annuler(){
  this.router.navigate(['rachat/achat/bonrcp']);
  this.toastr.error('', 'Annulation');
}
  }


