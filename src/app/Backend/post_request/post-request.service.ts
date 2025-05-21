import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestModel } from '../../request.model';

@Injectable({
  providedIn: 'root'
})
export class PostRequestService {
  private apiUrl = 'http://localhost:3000/api/requests';

  // Injecte le service HttpClient
  constructor(private http: HttpClient) {}

  // POST Créer une nouvelle demande resim
  createRequest(request: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
  }

}
