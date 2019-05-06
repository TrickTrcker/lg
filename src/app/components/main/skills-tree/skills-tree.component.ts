import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import * as _ from 'lodash';
import { animate } from '@angular/animations';

@Component({
  selector: 'lga-skills-tree',
  templateUrl: './skills-tree.component.html',
  styleUrls: ['./skills-tree.component.scss']
})
export class SkillsTreeComponent implements OnInit {
  skillsList: any = [];
  selectedSkillId: any = 0;
  constructor(private dialog: MatDialog, ) { }

  ngOnInit() {
    this.getSkillList();
  }
  getSkillList() {
    this.skillsList = [{
      id: 1,
      parent: 1,
      title: 'Climbing',
      animation: 'hvr-pulse',
      shape: 'round',
      imagepath: './assets/images/physical/11.png',
      progrees: 100,
      skillname: null,
      children: [{
        id: 2,
        children: 1,
        title: 'Riyadh On-Sight Climbers',
        animation: 'hvr-pulse-shrink',
        shape: 'round',
        imagepath: './assets/images/physical/10.png',
        progrees: 72,
        skillname: null,
        child: [],
      },
      {
        id: 3,
        children: 1,
        title: 'Top Rope',
        animation: 'hvr-pulse',
        shape: 'round',
        imagepath: './assets/images/physical/16.png',
        progrees: 61,
        skillname: null,
        child: [{
          id: 9,
          title: 'Rope Climbing',
          animation: 'hvr-pulse',
          shape: 'round',
          imagepath: './assets/images/physical/17.png',
          progrees: 64,
          skillname: null,
          children: [],
        },
        {
          id: 4,
          title: 'New Goal',
          animation: 'hvr-pulse',
          shape: 'round',
          imagepath: './assets/images/physical/12.png',
          progrees: 62,
        },
        {
          id: 5,
          title: 'New Top Rope',
          animation: 'hvr-pulse',
          shape: 'round',
          imagepath: './assets/images/physical/16.png',
          progrees: 62,
          skillname: null,
          children: [
            {
              id: 10,
              children: 1,
              title: 'Fullfils',
              animation: 'hvr-pulse',
              shape: 'round',
              imagepath: './assets/images/physical/10.png',
              progrees: 72,
              skillname: null,
              child: [],
            },
            {
              id: 11,
              children: 1,
              title: 'Fullfils',
              animation: 'hvr-pulse',
              shape: 'rhombus',
              imagepath: './assets/images/physical/13.png',
              progrees: 72,
              skillname: 'Bouldering',
              child: [],
            },
            {
              id: 12,
              children: 1,
              title: 'Top Rope',
              animation: 'hvr-pulse',
              shape: 'round',
              imagepath: './assets/images/physical/16.png',
              progrees: 61,
              child: [{
                id: 15,
                title: 'Riyadh On-Sight Climbers',
                animation: 'hvr-pulse',
                imagepath: './assets/images/physical/9.png',
                progrees: 64,
                children: [{
                  id: 18,
                  children: 1,
                  title: 'Rope Climbing',
                  animation: 'hvr-pulse',
                  shape: 'round',
                  imagepath: './assets/images/physical/10.png',
                  progrees: 72,
                  child: [],
                }, {
                  id: 19,
                  children: 1,
                  title: 'New Goal',
                  animation: 'hvr-pulse',
                  shape: 'round',
                  imagepath: './assets/images/physical/10.png',
                  progrees: 72,
                  child: [],
                },
                ]
              },
              {
                id: 16,
                title: 'Top Rope',
                animation: 'hvr-pulse',
                shape: 'round',
                imagepath: './assets/images/physical/9.png',
                progrees: 62,
              },
              {
                id: 17,
                title: 'Bouldering',
                animation: 'hvr-pulse',
                shape: 'round',
                imagepath: './assets/images/physical/9.png',
                progrees: 62,
                children: [{
                  id: 20,
                  children: 1,
                  title: 'Rope Climbing',
                  animation: 'hvr-pulse',
                  shape: 'round',
                  imagepath: './assets/images/physical/17.png',
                  progrees: 72,
                  child: [],
                },
                {
                  id: 21,
                  children: 1,
                  title: 'New Goal',
                  animation: 'hvr-pulse',
                  shape: 'round',
                  imagepath: './assets/images/physical/12.png',
                  progrees: 72,
                  child: [],
                },
                ]
              },
              ],
            },
            {
              id: 13,
              children: 1,
              title: 'Recommended',
              animation: 'hvr-pulse',
              shape: 'circle',
              imagepath: './assets/images/physical/9.png',
              progrees: 86,
              skillname: '+5 Skills',
              child: [],
            },
            {
              id: 14,
              children: 1,
              title: 'Needed (4)',
              animation: 'hvr-pulse',
              shape: 'octagon',
              imagepath: './assets/images/physical/15.png',
              progrees: 86,
              skillname: 'Rope',
              child: [],
            }],
        },
        {
          id: 6,
          title: 'Bouldering (Hard)',
          animation: 'hvr-pulse',
          shape: 'round',
          imagepath: './assets/images/physical/13.png',
          progrees: 62,
          skillname: null,
        },
        {
          id: 7,
          title: 'Top Mountain',
          animation: 'hvr-pulse',
          shape: 'round',
          imagepath: './assets/images/physical/9.png',
          progrees: 62,
          skillname: null,
        },
        ],
      },
      {
        id: 8,
        children: 1,
        title: 'Bouldering',
        animation: 'hvr-pulse',
        shape: 'round',
        imagepath: './assets/images/physical/9.png',
        progrees: 86,
        skillname: null,
        child: [],
      }],
    },
    ];
  //  console.log(this.skillsList);
  }
  changeSkillData(event, data) {
     this.selectedSkillId = data.id; 
  }
}