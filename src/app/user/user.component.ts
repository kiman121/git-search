import { Component, OnInit } from '@angular/core';
import { SearchRequestService } from '../search-http/search-request.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: User;
  constructor(private searchService: SearchRequestService) {}

  ngOnInit(): void {
    this.searchService.searchRequest();
    this.user = this.searchService.user;
  }
}
