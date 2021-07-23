import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventairemodel } from 'src/app/models/inventaire.model';
import { InventaireserviceService } from 'src/app/services/inventaireservice.service';

@Component({
  selector: 'app-addinv',
  templateUrl: './addinv.component.html',
  styleUrls: ['./addinv.component.css']
})
export class AddinvComponent implements OnInit {
inv=new Inventairemodel();
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private invservice:InventaireserviceService) { }

  ngOnInit(): void {
    this.addinv();
  }
  addinv(){
    let listAchat: Array<ListProduct> = new Array();
      for (var i = 0; i < this.listProduct.length; i++) {
        let product = new ListProduct();
        product.quantite=this.listProduct[i].quantite_entre;
        product.id_product=this.listProduct[i].id;
        product.Libelle=this.listProduct[i].Libelle;
        listAchat.push(product);
      }
    this.invservice.insertData(this.inv).subscribe(res=>{
    })
  }

  annuler(){
    this.router.navigate(['rachat/inventaire']);
    this.toastr.error('', 'Annulation');
  }
}
