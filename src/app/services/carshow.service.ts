import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carshow } from '../models/carshow';

@Injectable({
  providedIn: 'root'
})
export class CarshowService {

  constructor(private httpClient: HttpClient) { }

  public getCarShows() {
    return this.httpClient.get<Carshow[]>('/carshows');

  }
}
