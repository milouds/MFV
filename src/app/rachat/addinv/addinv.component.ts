import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addinv',
  templateUrl: './addinv.component.html',
  styleUrls: ['./addinv.component.css']
})
export class AddinvComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rachat/inventaire']);
    this.toastr.error('', 'Annulation');
  }
}
