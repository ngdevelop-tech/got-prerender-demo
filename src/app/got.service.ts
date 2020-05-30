import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book.model';
import { Character } from './models/character.model';

@Injectable({
  providedIn: 'root'
})
export class GotService {

  BASE_URL = 'https://www.anapioficeandfire.com/api/';

  constructor(private httpClient: HttpClient) { }

  getGotBooks(){
    return this.httpClient.get<Book[]>(this.BASE_URL + '/books');
  }
  
  getGotCharacter(id: number){
    return this.httpClient.get<Character>(this.BASE_URL + `/characters/${id}`);
  }
  
  getGotCharacters(pageNo: number, pageSize: number){
    return this.httpClient.get<Character[]>(this.BASE_URL + `/characters?page=${pageNo}&pageSize=${pageSize}`);
  }



}
