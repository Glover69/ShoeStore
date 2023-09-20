import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BestSellers } from '../models/shoes.models';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://json-server-two-chi.vercel.app/shoes'; 

  constructor(private http: HttpClient) {}

  getBestSellers(): Observable<any[]> {
    return this.http.get<BestSellers[]>(this.apiUrl);
  }
}
