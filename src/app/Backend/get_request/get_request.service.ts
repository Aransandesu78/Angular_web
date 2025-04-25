import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRequestService {
  private apiUrl = 'http://localhost:3000/api/requests';
  
  constructor(private http : HttpClient) {}

  // Get : pour récupérer mes demandes resims
  // async getRequests(): Promise<any> {
  //   const data = await fetch(this.apiUrl);
  //   return await data.json() ?? [];
  // }

  getRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}
