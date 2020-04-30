import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { item } from  './policy';
import { oneItem } from  './policy';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost:8081";
  constructor(private httpClient: HttpClient) { }
  
  readPolicies(): Observable<item[]>{
    
    return this.httpClient.get<item[]>(`${this.PHP_API_SERVER}/api/test.php`);
  }

  readoneItem(id: number): Observable<oneItem[]>{
    
    return this.httpClient.post<oneItem[]>(`${this.PHP_API_SERVER}/api/getItem.php`,id);
  }
  
}
