import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$ = this.gotService.getGotBooks();

  constructor(private gotService: GotService) { }

  ngOnInit(): void {
  }

}
