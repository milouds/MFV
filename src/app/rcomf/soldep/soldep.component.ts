import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { operationModel } from 'src/app/models/operation.model';
import { depenseService } from 'src/app/services/depense.service';
import { operationService } from 'src/app/services/opeartion.service';

@Component({
  selector: 'app-soldep',
  templateUrl: './soldep.component.html',
  styleUrls: ['./soldep.component.css']
})
export class SoldepComponent implements OnInit {
  depense:any;
  operation=new operationModel();

  constructor(private depenseservice:depenseService,private operationservice:operationService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getdepenseData();
    this.operation.note="pas de note";
    this.operation.typep="Débit";
    this.operation.mode="Espèces";
  }
  getdepenseData(){
    this.depenseservice.getData().subscribe(res=>{
    this.depense=res;
    });
  }
  insertData(){
    this.operationservice.insertData(this.operation).subscribe(res=>{
      this.router.navigate(['rcomf/treso']);
      this.toastr.success('avec succès', 'Operation ajouté :)');
      });
  }
}
