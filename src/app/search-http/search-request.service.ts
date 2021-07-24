import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root',
})
export class SearchRequestService {
  user: User;
  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', 0, 0, 0, '');
  }

  searchRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      bio: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: string;
    }
    // https://api.github.com/users/kiman121/repos?access_token=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
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          'https://api.github.com/users/kiman121?access_token=' +
            environment.accessToken
        )
        .toPromise()
        .then(
          (response) => {
            this.user.username = response.login;
            this.user.avatarUrl = response.avatar_url;
            this.user.bio = response.bio;
            this.user.location = response.location;
            this.user.publicRepos = response.public_repos;
            this.user.followers = response.followers;
            this.user.following = response.following;
            this.user.createdAt = response.created_at;

            resolve('done');
          },
          (error) => {
            // this.gif.data = [];

            reject(error);
          }
        );
    });

    return promise;
  }
}
