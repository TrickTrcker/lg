import { Injectable } from '@angular/core';
import { TreeNode } from '../../models/tree-node';
import { ActivityService } from '../activity/activity.service';
import { StartupService } from '../startup/startup.service';
import { Skill } from '../../models/skill';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  selectedSkill: Skill;

  constructor(private activityService: ActivityService
    , private startupService: StartupService) { }

  prepareData(id, input: Array<TreeNode>, loadTwoNodes: boolean) {
    this.activityService.getSubskillsBySkillId(id).subscribe(e => {
      if (e.result && e.result.length > 0) {
        for (let i = 0; i < e.result.length; i++) {

          input.unshift({
            id: e.result[i].uid,
            imgUrl: e.result[i].iconUrl,
            label: e.result[i].title,
            data: e.result[i],
            children: new Array<TreeNode>(),
            expanded: loadTwoNodes
          } as TreeNode);
          
          e.result[i].parentSkillId = id;
          e.result[i].isAcquired = this.startupService.getUserAcquiredSkills().find(ss => ss.uid == e.result[i].uid) ? true : false;
          e.result[i].isOptional = e.result[i].marks && e.result[i].marks.find(m => m == 'Optional') ? true : false; 
          if (e.result[i].isOptional)
            this.sortArray(input);
          this.setFirstAndLastNode(input);

          // to check if skill is optional first we need to get recomended skills for parent skill
          // and then compare with current skill
          // this.activityService.getRecommendedSkillsBySkillId(id).subscribe(rec => {
          //   if (rec.result && rec.result.length > 0){
          //     e.result[i].isOptional = rec.result.find(rr => rr.uid == e.result[i].uid) ? true : false;
          //     this.sortArray(input);
          //     this.setFirstAndLastNode(input);
          //   }
          // });

          if (loadTwoNodes) {
            this.prepareData(e.result[i].uid, input[0].children, false);
          }
        }
      }
    });
  }

  sortArray(input: TreeNode[]): TreeNode[] {
    return input.sort((val1, val2)=> {
      return Number(val1.data.isOptional) - Number(val2.data.isOptional)
    });
  }

  setFirstAndLastNode(input: TreeNode[]) {
    if (input.filter(e => !e.data.isOptional).length > 0) {
      input.map(e => e.first = false);
      input.map(e => e.last = false);
      input.filter(e => !e.data.isOptional)[input.filter(e => !e.data.isOptional).length - 1].last = true;
      input.filter(e => !e.data.isOptional)[0].first = true;
    }
  }
}
