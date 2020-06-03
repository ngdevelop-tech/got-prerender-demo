import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters$ = this.gotService.getGotCharacters(57, 10);

  constructor(private gotService: GotService) { }

  ngOnInit(): void {
  }

}
