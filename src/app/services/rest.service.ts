import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getHttpOptions() {
    const httpoptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Cache-control': 'no-cache'
      })
    };
    return httpoptions;
  }

  baseUrl = 'https://cors-everywhere.herokuapp.com/http://www.omdbapi.com/?apikey=81283aa7'

  // http://www.omdbapi.com/?apikey=81283aa7&i=tt0944947&Season=1&

   getData(endpoint){
     return this.http.get(this.baseUrl+endpoint);
   }
}
