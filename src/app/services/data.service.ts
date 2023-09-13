import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://json-server-two-chi.vercel.app/bestSellers'; 

  constructor(private http: HttpClient) {}

  getBestSellers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
