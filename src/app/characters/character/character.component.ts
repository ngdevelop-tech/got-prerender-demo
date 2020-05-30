import { Component, OnInit } from '@angular/core';
import { GotService } from 'src/app/got.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character$ = this.activatedRoute.paramMap.pipe(
    switchMap(params=> this.gotService.getGotCharacter(+params.get('id')))
  );

  constructor(private gotService: GotService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
