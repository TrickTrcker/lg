import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivityService } from '../../../services/activity/activity.service';
import { Skill } from '../../../models/skill';
import { DOCUMENT } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
// import {SkillAddEditComponent} from '../../skills/skill-add-edit/skill-add-edit.component';
// import {SkillsTreeComponent} from '../../skills/skills-tree/skills-tree.component';
import * as _ from 'lodash';
import * as $ from 'jquery';
@Component({
  selector: 'lga-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './header-banner.css'
  ],
})
export class HomeComponent implements OnInit {
  activities: Array<Skill>;
  heading: any

  phisicalSkill = {
    uid: 'FD57F4000FF141F5B390B4E703DED138'
  } as Skill;

  mentalSkill = {
    uid: 'CAB8B4C4AFB74CEABB5F687AB4AAF2A8'
  } as Skill;

  lastSkill: Skill = new Skill();
  parentSkillId = '';

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };

  skillsCarousels: Array<Array<Skill>> = new Array<Array<Skill>>();

  actId: string;
  activedPhysicalSection: boolean = false;
  activatedMentalSection: boolean = false;
  activatesection: boolean = false;
  //  @ViewChild(SkillsTreeComponent) skillsTreeComponentRef: SkillsTreeComponent;
  constructor(private dialog: MatDialog,
    private activityService: ActivityService, private route: ActivatedRoute,
    @Inject(DOCUMENT) private _document: Document, private pageScrollService: PageScrollService) {
  }

  ngOnInit() {
    this.heading = "Rope Climbing"
    // this.route.queryParams.subscribe(params => {
    //   if (!_.isEmpty(params["section"])) {
    //     if (params["section"] == "physical") {
    //       this.activatesection = true;
    //       this.activedPhysicalSection = true;
    //       this.activatedMentalSection = false;
    //       setTimeout(() => {
    //         this.scrollToSection('#physicalSection')
    //       });
    //       // $("#physicalSection").addClass
    //     }
    //     else if (params["section"] == "mental") {
    //       this.activatesection = true;
    //       this.activedPhysicalSection = false;
    //       this.activatedMentalSection = true;
    //       setTimeout(() => {
    //         this.scrollToSection('#mentalSection')
    //       });
    //     }
    //   }
    //   console.log(params);
    // })
  }
  getSkillsByActivityId(skill: Skill, cleanArray: boolean) {
    this.lastSkill = skill;
    this.activityService.getSubskillsBySkillId(skill.uid).subscribe(e => {
      if (cleanArray) this.skillsCarousels = new Array<Array<Skill>>();
      if (e.result && e.result.length > 0) {
        e.result.forEach(s => {
          s.parentSkillId = skill.uid;
        })
      }

      let index = this.skillsCarousels.findIndex((element) => {
        return (element && element.length > 0 ? element[0].parentSkillId == skill.parentSkillId : false);
      });

      if (index != -1) {
        this.skillsCarousels.splice(index + 1);
      }
      this.skillsCarousels.push(e.result);
      this.scrollToAnchor((index + 1).toString(), 100);
    });
  }

  getSkillHeaderText(i: number, parentSkillId: string) {
    if (i != 0) {
      try {
        return this.skillsCarousels[i - 1].find(e => e.uid == parentSkillId).title;
      } catch {
        return '';
      }
    } else {
      return parentSkillId == 'FD57F4000FF141F5B390B4E703DED138' ? 'Phisical' : 'Mental';
    }
  }

  public scrollToAnchor(location: string, wait: number): void {
    setTimeout(() => {
      const element = document.getElementById(location);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
        }, wait / 2)
      }
    }, wait / 2)
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = "custom-dialog-container";
    // const dialogRef = this.dialog.open(SkillAddEditComponent, dialogConfig);
    // dialogRef.componentInstance.parentTreeSkillId = this.parentSkillId;
    // dialogRef.componentInstance.skill = {parentSkillId: this.lastSkill.uid} as Skill;
    // dialogRef.componentInstance.reload.subscribe(() => {
    //   this.skillsTreeComponentRef.initTree();
    // });
  }
  public scrollToSection(section): void {
    if (section == '#physicalSection') {
      this.activatesection = true;
      this.activedPhysicalSection = true;
      this.activatedMentalSection = false;
    } else if (section == '#mentalSection') {
      this.activatesection = true;
      this.activedPhysicalSection = false;
      this.activatedMentalSection = true;
    }
    setTimeout(() => {
      this.pageScrollService.scroll({
        document: this._document,
        scrollTarget: section,
        scrollOffset: 55,
        duration: 1000,
        interruptible: false
      });
    });
  }
}
