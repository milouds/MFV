import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbonrec',
  templateUrl: './addbonrec.component.html',
  styleUrls: ['./addbonrec.component.css']
})
export class AddbonrecComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rachat/achat/bonrcp']);
    this.toastr.error('', 'Annulation');
  }
}
