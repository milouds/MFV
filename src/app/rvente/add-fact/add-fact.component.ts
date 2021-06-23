import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-fact',
  templateUrl: './add-fact.component.html',
  styleUrls: ['./add-fact.component.css']
})
export class AddFactComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rvente/vente/Facture']);
    this.toastr.error('', 'Annulation');
  }
}
