import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CamsApiService {

  constructor(private oHttpClietn: HttpClient) {

  }

  getAllResorts() {
    return this.oHttpClietn.get('https://makevoid-skicams.p.mashape.com/cams.json');
  }

}
