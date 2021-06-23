import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-comm',
  templateUrl: './add-comm.component.html',
  styleUrls: ['./add-comm.component.css']
})
export class AddCommComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(['rvente/vente/CommandeCl']);
    this.toastr.error('', 'Annulation');
  }
}
