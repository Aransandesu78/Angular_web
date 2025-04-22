import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'http://localhost:3080/api/requests';
  
  constructor(private http : HttpClient) {}

  // Get : pour récupérer mes demandes resims
  getRequests(): Observable<FormGroup[]> {
    return this.http.get<FormGroup[]>(this.apiUrl);
  }
  
  // Post : pour ajouter une nouvelle request
  addRequest(request : FormGroup): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
}
