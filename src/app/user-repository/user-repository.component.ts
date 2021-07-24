import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository-class/repository';
import { SearchRequestService } from '../search-http/search-request.service';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.css'],
})
export class UserRepositoryComponent implements OnInit {
  repositories: Repository[];
  constructor(private searchService: SearchRequestService) {
    
  }

  ngOnInit(): void {
    // this.repositories = []
    this.searchService.getRepositories();
    this.repositories = this.searchService.repositories;
    // console.log(this.repositories);
  }
}
