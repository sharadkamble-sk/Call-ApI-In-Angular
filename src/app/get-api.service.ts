import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }
  apicall()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
    
  }
}
