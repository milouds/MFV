import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class devisService {
  constructor(private http:HttpClient) { }
}
