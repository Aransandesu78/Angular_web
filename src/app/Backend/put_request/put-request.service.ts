import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestModel } from '../../request.model';

@Injectable({
  providedIn: 'root'
})
export class PutRequestService {
  private apiUrl = 'http://localhost:3000/api/requests';
  
  // Injecte le service HttpClient
  constructor(private http : HttpClient) {}

  // PUT - Mettre à jour une demande resim 
  updateRequest(request: RequestModel): Observable<RequestModel> {
    return this.http.put<RequestModel>(`${this.apiUrl}/${request.id}`, request);
  }
}
