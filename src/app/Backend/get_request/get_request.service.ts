import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  getRequestById(id: number): Observable<RequestModel> {
    return this.http.get<RequestModel>(`${this.apiUrl}/${id}`);
  }

  // Récupère les demandes resims selon le filtrage
  getRequestsByFilter(filters: { [key: string]: any}): Observable<RequestModel[]> {
    // Créer un objet pour récupérer les paramètres de la requête
    let params = new HttpParams();
    // Ajouter dynamiquement les paramètres non nuls
    Object.keys(filters).forEach(key => {
      if (filters[key] !== null && filters[key] !== undefined && filters[key] !== '') {
        params = params.set(key, filters[key]);
      }
    });
    return this.http.get<RequestModel[]>(`${this.apiUrl}`, { params });
  }

  // Récupère les demandes resims qui possèdent le status de la bucket sélectionné 
  getRequestsByStatus(statusBuckettemp : string[]): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(`${this.apiUrl}`, { params: { statusBuckettemp } });
  }
}
