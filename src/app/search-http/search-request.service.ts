import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
  search:any [] = [];
  constructor(private http: HttpClient) { }

  searchRequest() {
    interface ApiResponse {
      data: [];
    }
// https://api.github.com/users/kiman121?access_token=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
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>('https://api.github.com/users/kiman121?access_token=' + environment.accessToken)
        .toPromise()
        .then((response)=>{
          this.search = response.data;
          // console.log("code");
          console.log(response)
          resolve('done');
        }, (error)=>{
          // this.gif.data = [];

          reject(error);
        }
        );
    });

    return promise
  }
}
