import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteRequestService {
  private apiUrl = 'http://localhost:3000/api/requests';
  
  // Injecte le service HttpClient
  constructor(private http : HttpClient) {}

  // DELETE - Supprimer une demande resim
  deleteRequest(id: number): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
