import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://www.omdbapi.com/?apikey=81283aa7'

  // http://www.omdbapi.com/?apikey=81283aa7&i=tt0944947&Season=1&

   getData(endpoint){
     return this.http.get(this.baseUrl+endpoint);
   }
}
