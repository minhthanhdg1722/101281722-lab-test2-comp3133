import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private httpClient: HttpClient) { }

  getAllMissions(){
    return this.httpClient.get<Mission[]>("https://api.spacexdata.com/v3/launches");
  }

  getMission(id:number){
    return this.httpClient.get<Mission>(`https://api.spacexdata.com/v3/launches/${id}`);
  }
}
