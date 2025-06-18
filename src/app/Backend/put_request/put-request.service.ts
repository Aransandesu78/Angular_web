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
  putRequest(id: number, request: any): Observable<RequestModel> {
    return this.http.put<RequestModel>(`${this.apiUrl}/${id}`, request);
  }

  // Patch - Mettre à jour partiellement une demande
  patchRequest(id: number, changes: Partial<RequestModel>): Observable<RequestModel> {
    return this.http.patch<RequestModel>(`${this.apiUrl}/${id}`, changes);
  }
}
