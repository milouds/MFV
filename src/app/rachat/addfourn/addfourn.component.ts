import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurModel } from 'src/app/models/fournisseur.model';
import { FournisseursService } from 'src/app/services/fournisseurs.service';

@Component({
  selector: 'app-addfourn',
  templateUrl: './addfourn.component.html',
  styleUrls: ['./addfourn.component.css']
})
export class AddfournComponent implements OnInit {
  fournisseurs: any;
  fournisseur= new FournisseurModel();

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private fournisseurService:FournisseursService) { }

  ngOnInit(): void {
    this.getFournisseursData();
  }
  getFournisseursData(){
    this.fournisseurService.getfournisseurData().subscribe((res: any)=>{
    this.fournisseurs=res;
    });
  }
  insertfournisseurData(){
    this.fournisseurService.insertfournisseurData(this.fournisseur).subscribe(res=>{
      this.router.navigate(['rachat/fournisseur']);
      this.toastr.success('avec succès', 'Fournisseur ajouté :)');
      });
  }
  annuler(){
    this.router.navigate(['rachat/fournisseur']);
    this.toastr.error('', 'Annulation');
  }
}
