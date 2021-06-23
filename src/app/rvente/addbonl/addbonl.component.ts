import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbonl',
  templateUrl: './addbonl.component.html',
  styleUrls: ['./addbonl.component.css']
})
export class AddbonlComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rvente/vente/Bonlivraison']);
    this.toastr.error('', 'Annulation');
  }
}
