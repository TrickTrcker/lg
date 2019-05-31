import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivityService } from '../../../services/activity/activity.service';
import { Skill } from '../../../models/skill';
import { CommonService } from '../../../services/common.service';
import { DOCUMENT } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
// import {SkillAddEditComponent} from '../../skills/skill-add-edit/skill-add-edit.component';
// import {SkillsTreeComponent} from '../../skills/skills-tree/skills-tree.component';
import * as _ from 'lodash';
import * as $ from 'jquery';
import { ModalContainerComponent } from 'angular-bootstrap-md';
import { Subscription } from 'rxjs';
@Component({
  selector: 'lga-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './header-banner.css'
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  activities: Array<Skill>;
  dyagonalhide: boolean = false;
  heading: any
  @ViewChild('treeDetailsModal') public treeDetailsModal: any;
  phisicalSkill = {
    uid: 'FD57F4000FF141F5B390B4E703DED138'
  } as Skill;

  mentalSkill = {
    uid: 'CAB8B4C4AFB74CEABB5F687AB4AAF2A8'
  } as Skill;

  lastSkill: Skill = new Skill();
  parentSkillId = '';
  treedetails_display = false;
  slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };

  skillsCarousels: Array<Array<Skill>> = new Array<Array<Skill>>();

  actId: string;
  activedPhysicalSection: boolean = false;
  activatedMentalSection: boolean = false;
  activatesection: boolean = false;
  private _subscriptions = new Subscription();
  //  @ViewChild(SkillsTreeComponent) skillsTreeComponentRef: SkillsTreeComponent;
  constructor(private dialog: MatDialog,
    private activityService: ActivityService, private route: ActivatedRoute, public CommonService: CommonService,
    @Inject(DOCUMENT) private _document: Document, private pageScrollService: PageScrollService) {
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.heading = "Rope Climbing";
    this.subscribeOninit();
  }
  subscribeOninit() {
    this._subscriptions.add(this.CommonService.getSkillModelEvent().subscribe((obj: any) => {
      console.log(obj);
      if (obj.ModelShow == false) {
        this.treeDetailsModal.hide();
      }
      else if (obj.ModelShow == true) {
        this.treeDetailsModal.show();

      }
    }));
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
  }
  public scrollToSection(section): void {
    $("#dyagonalbox").slideUp(200)
    if (section == '#physicalSection') {
      this.activatesection = true;
      this.activedPhysicalSection = true;
      this.activatedMentalSection = false;
    } else if (section == '#mentalSection') {
      this.activatesection = true;
      this.activedPhysicalSection = false;
      this.activatedMentalSection = true;
    }
    if(!this.dyagonalhide)
    {
      this.dyagonalhide = true
      setTimeout(() => {
        this.pageScrollService.scroll({
          document: this._document,
          scrollTarget: section,
          scrollOffset: 105,
          duration: 150,
          interruptible: false
        });
      }, 100);
    }
  }
  public ShowTreeDetails() {
    this.treeDetailsModal.show();
    // this.CommonService.setSkillModelEvent({},true);
  }
}
