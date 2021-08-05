import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { clientModel } from 'src/app/models/clients.model';
import { Facturemodel } from 'src/app/models/Facture.model';
import { ListProduct } from 'src/app/models/Listproduct.model';
import { ClientsService } from 'src/app/services/clients.service';
import { factureService } from 'src/app/services/facture.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-add-fact',
  templateUrl: './add-fact.component.html',
  styleUrls: ['./add-fact.component.css']
})
export class AddFactComponent implements OnInit {
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
  index_client:any;
  f:any;
  client =new clientModel;
  facture = new Facturemodel;
  Net: any;
  prod:any;
  listProduct: Facturemodel[] = [new Facturemodel()];
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private productService:ProductService,private clientservice:ClientsService,private factService: factureService) { }
  ngOnInit(): void {
    this.getclients();
    this.facture.Timbre_fiscale=0.6;
    this.getProductsData()
    this.getproduits();
    this.facture.Montant_TTC=0;
    this.facture.Montant_TVA=0;
    this.facture.note="pas de note";
    this.facture.Ref_Facture="fac-"
  }
  add(){
    let fact = new Facturemodel();
    this.listProduct.push(fact);
  }
    getProductsData() {
      this.factService.getData().subscribe(res => {
      this.factures = res;
      });
    }
    insertData() {
      console.log(this.facture);
      this.facture.Etat="non payé";
      this.facture.Timbre_fiscale=0.6;
      this.facture.Nom_client=this.f[this.index_client].name
      this.facture.id_client=this.f[this.index_client].id
      this.facture.quantite_entre=999;
      let listvente: Array<ListProduct> = new Array();
      for (var i = 0; i < this.listProduct.length; i++) {
        let product = new ListProduct();
        product.quantite=this.listProduct[i].quantite_entre;
        product.id_product=this.listProduct[i].id;
        product.Libelle=this.listProduct[i].Libelle;
        listvente.push(product);
      }
      this.facture.ListProductv=listvente;
      this.factService.insertData(this.facture).subscribe(res => {
        this.router.navigate(['rvente/vente/Facture']);
        this.toastr.success('avec succès', 'Facture Enregistrée');
      });
    }
    getproduits() {
      this.productService.getData().subscribe(res => {
      this.products=res;
      });
    }
    getclients(){
      this.clientservice.getClientData().subscribe(res => {
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
    this.router.navigate(['rvente/vente/Facture']);
    this.toastr.error('', 'Annulation');
  }
}
