import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { productModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-adddevis',
  templateUrl: './adddevis.component.html',
  styleUrls: ['./adddevis.component.css']
})
export class AdddevisComponent implements OnInit {


  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }
  produit = new productModel();
  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rvente/vente/Devis']);
    this.toastr.error('', 'Annulation');
  }
}
