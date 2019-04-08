import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill';
import { ActivityService } from '../activity/activity.service';
import { Attribute } from '../../models/attribute/attribute';
import { AttributeService } from '../attribute/attribute.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  acquiredSkills: Array<Skill> = new Array<Skill>();
  attributes: Array<Attribute> = new Array<Attribute>();

  constructor(private activityService: ActivityService,
    private attributeService: AttributeService) { }

  initStartupData(userId) {
    if (userId) {
      this.activityService.getAcquiredSkillsByUSerID(userId).subscribe(e => {
        this.acquiredSkills = e.result;
      });
    }
    this.attributeService.getAllAttributes().subscribe(e => {
      this.attributes = e.result;
    });
  }

  resetStartupData() {
    this.acquiredSkills = new Array<Skill>();
    this.attributes = new Array<Attribute>();
  }

  getAttributes() {
    return this.attributes ? this.attributes : new Array<Attribute>();
  }

  getUserAcquiredSkills() {
    return this.acquiredSkills ? this.acquiredSkills : new Array<Skill>();
  }
}
