import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {
  // On fait appel au service HttpClient
  constructor(private http : HttpClient) {}

  // On récupère par la méthode les demandes resim
  get_resim_request() {

  }
}
