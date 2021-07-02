import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { depenseModel } from 'src/app/models/depense.model';
import { depenseService } from 'src/app/services/depense.service';

@Component({
  selector: 'app-adddep1',
  templateUrl: './adddep1.component.html',
  styleUrls: ['./adddep1.component.css']
})
export class Adddep1Component implements OnInit {
depense = new depenseModel();
  constructor(private depenseservice:depenseService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  insertData(){
    this.depenseservice.insertData(this.depense).subscribe(res=>{
      this.router.navigate(['rcomf/treso/soldep']);
      this.toastr.success('avec succès', 'Depense ajouté :)');
      });
  }
  annuler(){
    this.router.navigate(['rcomf/treso/soldep']);
    this.toastr.error('', 'Annulation');
  }

}
