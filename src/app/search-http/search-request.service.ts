import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';

@Injectable({
  providedIn: 'root',
})
export class SearchRequestService {
  user: User;
  repositories: Repository[] = [];
  repoUsername: string = '';

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', 0, 0, 0, '');
    this.setUsername();
    this.repositories = [];
  }

  setUsername(username: string = '') {
    this.repositories.splice(0, this.repositories.length);

    if (username == '') {
      this.repoUsername = 'kiman121';
    } else {
      this.repoUsername = username;
    }
  }

  getRepositories() {
    interface ApiResponse {
      name: string;
      description: string;
      created_at: string;
      forks: number;
    }

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          // `https://api.github.com/users/${this.repoUsername}/repos?access_token=${environment.accessToken}`
          `https://api.github.com/users/${this.repoUsername}/repos`
        )
        .toPromise()
        .then(
          (response) => {
            Object.values(response).forEach((element) => {
              this.repositories.push(
                new Repository(
                  element.name,
                  element.description,
                  element.created_at,
                  element.forks,
                  element.watchers,
                  element.html_url
                )
              );
            });

            resolve('done');
          },
          (error) => {
            this.repositories = [];

            reject(error);
          }
        );
    });

    return promise;
  }

  getRepositoryUser() {
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

    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          `https://api.github.com/users/${this.repoUsername}`
          // `https://api.github.com/users/${this.repoUsername}?access_token=${environment.accessToken}`
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
