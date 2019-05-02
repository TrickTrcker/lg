import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'lga-skills-tree',
  templateUrl: './skills-tree.component.html',
  styleUrls: ['./skills-tree.component.scss']
})
export class SkillsTreeComponent implements OnInit {
  skillsList: any = [];
  constructor(private dialog: MatDialog, ) { }

  ngOnInit() {
    this.getSkillList()
  }
  getSkillList() {
    this.skillsList = [{
      parent: 1,
      title: 'Climbing',
      animation: 'hvr-pulse',
      imagepath: '/assets/images/physical/11.png',
      progrees: 100,
      children: [{
        children: 1,
        title: 'Riyadh On-Sight Climbers',
        animation: 'hvr-pulse-shrink',
        imagepath: '/assets/images/physical/10.png',
        progrees: 72,
        child: [],
      },
      {
        children: 1,
        title: 'Top Rope',
        animation: 'hvr-pulse',
        imagepath: '/assets/images/physical/16.png',
        progrees: 61,
        child: [{
          title: 'Rope Climbing',
          animation: 'hvr-pulse',
          imagepath: '/assets/images/physical/17.png',
          progrees: 64,
          children: [],
        },
        {
          title: 'New Goal',
          animation: 'hvr-pulse',
          imagepath: '/assets/images/physical/12.png',
          progrees: 62,
        },
        {
          title: 'New Top Rope',
          animation: 'hvr-pulse',
          imagepath: '/assets/images/physical/16.png',
          progrees: 62,
          children: [{
            children: 1,
            title: 'Fullfils',
            animation: 'hvr-pulse',
            imagepath: '/assets/images/physical/10.png',
            progrees: 72,
            child: [],
          },
          {
            children: 1,
            title: 'Top Rope',
            animation: 'hvr-pulse',
            imagepath: '/assets/images/physical/16.png',
            progrees: 61,
            child: [{
              title: 'Riyadh On-Sight Climbers',
              animation: 'hvr-pulse',
              imagepath: '/assets/images/physical/9.png',
              progrees: 64,
              children: [{
                children: 1,
                title: 'Rope Climbing',
                animation: 'hvr-pulse',
                imagepath: '/assets/images/physical/10.png',
                progrees: 72,
                child: [],
              }, {
                children: 1,
                title: 'New Goal',
                animation: 'hvr-pulse',
                imagepath: '/assets/images/physical/10.png',
                progrees: 72,
                child: [],
              },
              ]
            },
            {
              title: 'Top Rope',
              animation: 'hvr-pulse',
              imagepath: '/assets/images/physical/9.png',
              progrees: 62,
            },
            {
              title: 'Bouldering',
              animation: 'hvr-pulse',
              imagepath: '/assets/images/physical/9.png',
              progrees: 62,
              children: [{
                children: 1,
                title: 'Rope Climbing',
                animation: 'hvr-pulse',
                imagepath: '/assets/images/physical/17.png',
                progrees: 72,
                child: [],
              },
              {
                children: 1,
                title: 'New Goal',
                animation: 'hvr-pulse',
                imagepath: '/assets/images/physical/12.png',
                progrees: 72,
                child: [],
              },
              ]
            },
            ],
          },
          {
            children: 1,
            title: 'Recommended',
            animation: 'hvr-pulse',
            imagepath: '/assets/images/physical/9.png',
            progrees: 86,
            child: [],
          },
          {
            children: 1,
            title: 'Needed (4)',
            animation: 'hvr-pulse',
            imagepath: '/assets/images/physical/9.png',
            progrees: 86,
            child: [],
          }],
        },
        {
          title: 'Bouldering (Hard)',
          animation: 'hvr-pulse',
          imagepath: '/assets/images/physical/13.png',
          progrees: 62,
        },
        {
          title: 'Top Mountain',
          animation: 'hvr-pulse',
          imagepath: '/assets/images/physical/9.png',
          progrees: 62,
        },
        ],
      },
      {
        children: 1,
        title: 'Bouldering',
        animation: 'hvr-pulse',
        imagepath: '/assets/images/physical/9.png',
        progrees: 86,
        child: [],
      }],
    },
    ];
    console.log(this.skillsList);
  }
}
