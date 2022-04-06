import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missionList:Mission[] = [];

  constructor(private dataService:SpacexapiService) {
    this.getAllMissions();
  }

  ngOnInit(): void {
  }

  getAllMissions(){
    this.dataService.getAllMissions().subscribe(res=>{
      this.missionList = res;
    });
  }
}
