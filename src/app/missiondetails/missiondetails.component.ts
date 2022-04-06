import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  
  mission?:Mission;
  constructor(private dataService:SpacexapiService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(p=>{
      console.log(p['id']);
      this.getMission(p['id'])
    });
  }

  ngOnInit(): void {
  }

  getMission(id:number){
    this.dataService.getMission(id).subscribe(res=>{
      this.mission = res;
    });
  }
}
