import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books$ = this.gotService.getGotBooks();

  constructor(private gotService: GotService) { }

  ngOnInit(): void {
  }

}
