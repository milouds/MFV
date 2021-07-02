import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurFacture } from 'src/app/models/facturef.model';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { FacturesService } from 'src/app/services/facturef.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-addfacturef',
  templateUrl: './addfacturef.component.html',
  styleUrls: ['./addfacturef.component.css']
})
export class AddfacturefComponent implements OnInit {
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
  facture = new FournisseurFacture();
  Net: any;
  prod:any;
  listProduct: FournisseurFacture[] = [new FournisseurFacture()];
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factureService: FacturesService,private productService:ProductService,private four:FournisseursService) { }
  ngOnInit(): void {
    this.getfournisseur();
    this.facture.Timbre_fiscale=0.6;
    this.getProductsData()
    this.getproduits();
    this.facture.Montant_TTC=0;
    this.facture.Montant_TVA=0;
  }
  add(){
    let fact = new FournisseurFacture();
    this.listProduct.push(fact);
  }
    getProductsData() {
      this.factureService.getData().subscribe(res => {
      this.factures = res;
      });
    }
    insertData() {
      console.log(this.facture);
      this.facture.Etat="non payé";
      this.facture.Timbre_fiscale=0.6;
      this.facture.Nom_fournisseur=this.f[this.index_fournisseur].NOM
      this.facture.id_fournisseur=this.f[this.index_fournisseur].id
      this.facture.quantite_entre=999;
      let listAchat: Array<ListProduct> = new Array();
      for (var i = 0; i < this.listProduct.length; i++) {
        let product = new ListProduct();
        product.quantite=this.listProduct[i].quantite_entre;
        product.id_product=this.listProduct[i].id;
        product.Libelle=this.listProduct[i].Libelle;
        listAchat.push(product);
      }
      this.facture.ListProduct=listAchat;
      this.factureService.insertData(this.facture).subscribe(res => {
      });
      this.router.navigate(['rachat/achat/facturef']);
      this.toastr.success('', 'Facture Enregistrée');
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
      this.facture.Montant_TTC=0;
      this.facture.Montant_TVA=0;
      this.facture.Total_HT=0;
      for (var i = 0; i < this.listProduct.length; i++) {
      this.facture.Montant_TTC+=this.listProduct[i].Montant_TTC;
      this.facture.Montant_TVA+=this.listProduct[i].Montant_TVA;
      this.facture.Total_HT+=this.listProduct[i].Total_HT;
      this.Net=this.facture.Montant_TTC+this.facture.Timbre_fiscale;
  }
}
  annuler(){
    this.router.navigate(['rachat/achat/facturef']);
    this.toastr.error('', 'Annulation');
  }
}
