import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-get-all-author',
  templateUrl: './get-all-author.component.html',
  styleUrl: './get-all-author.component.scss'
})
export class GetAllAuthorComponent {
  constructor(private homeService: HomeService) { }
  authors: any = [];
  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors() {
    this.homeService.getAllAuthor().subscribe ((res) => {
      console.log(res);
      this.authors = res;
    });
  }
  deleteAuthor(id: number) {
    this.homeService.deleteAuthor(id).subscribe((res) => {
      console.log(res);
      this.getAllAuthors();
    });
  }

}
