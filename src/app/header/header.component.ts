import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchRequestService } from '../search-http/search-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchName: string;
  constructor(private searchService: SearchRequestService) {}

  submitSearch(form: NgForm) {
    var searchName = form.value.searchName;
    if (searchName !== '') {
      this.searchService.setUsername(form.value.searchName);
      this.searchService.getRepositories();
      this.searchService.getRepositoryUser();
      this.resetFields(form);
    }
  }
  resetFields(form) {
    form.reset();
  }
  ngOnInit(): void {}
}
