import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'lga-started-skills',
  templateUrl: './started-skills.component.html',
  styleUrls: ['./started-skills.component.scss']
})
export class StartedSkillsComponent implements OnInit {

  public selectedTree: any;
  private _subscriptions = new Subscription();
  skillsList: any = [];
  selectedSkillId: any = 0;
  constructor(private dialog: MatDialog, public CommonService: CommonService) { }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.getSkillList();
    this.subscribeOninit();
  }
  subscribeOninit() {
    this._subscriptions.add(this.CommonService.getSkillModelEvent().subscribe((obj: any) => {
      console.log(obj);
      if (obj.ModelShow == true) {
        this.selectedTree = obj.selectedTree;
      }
    }));
  }
  getSkillList() {
    this.skillsList =
      {
        id: 1,
        parent: 1,
        title: 'Climbing',
        animation: 'hvr-pulse',
        shape: 'circle',
        imagepath: './assets/images/physical/14.png',
        progrees: 100,
        skillname: null,
        children: [
          {
            id: 2,
            title: 'Riyadh On-Sight Climbers',
            animation: 'hvr-pulse-shrink',
            shape: 'circle',
            imagepath: './assets/images/physical/14.png',
            progrees: 72,
            skillname: null,
            children: [{
              id: 9,
              title: 'Rope Climbing',
              animation: 'hvr-pulse',
              shape: 'circle',
              imagepath: './assets/images/physical/14.png',
              progrees: 64,
              skillname: null,
              children: [],
            }],
          },
          {
            id: 3,
            title: 'Top Rope',
            animation: 'hvr-pulse',
            shape: 'circle',
            imagepath: './assets/images/physical/14.png',
            progrees: 61,
            skillname: null,
            children: [{
              id: 9,
              title: 'Rope Climbing',
              animation: 'hvr-pulse',
              shape: 'circle',
              imagepath: './assets/images/physical/14.png',
              progrees: 64,
              skillname: null,
              children: [],
            },
            {
              id: 4,
              title: 'New Goal',
              animation: 'hvr-pulse',
              shape: 'circle',
              imagepath: './assets/images/physical/14.png',
              progrees: 62,
              children: []
            },
            {
              id: 8,
              children: 1,
              title: 'Bouldering',
              animation: 'hvr-pulse',
              shape: 'circle',
              imagepath: './assets/images/physical/14.png',
              progrees: 86,
              skillname: null,
              child: [],
            }],
          }
        ],
      }; 
  }
  changeSkillData(event, data) {
    this.selectedSkillId = data.id;
    this.CommonService.setSkillModelEvent(data, true);
  }
}
