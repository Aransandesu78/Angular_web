import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestModel } from '../../request.model';

@Injectable({
  providedIn: 'root'
})
export class GetRequestService {
  private apiUrl = 'http://localhost:3000/api/requests';
  
  // Injecte le service HttpClient
  constructor(private http : HttpClient) {}

  // GET Récupérer toutes les demandes resims de la base de données
  getRequests(): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(this.apiUrl);
  }

  // Récupère le numéro de la demande clickée
  getRequestById(id: number): Observable<RequestModel>{
    return this.http.get<RequestModel>(`${this.apiUrl}/${id}`);
  }
}
