import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'lga-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.scss',
  './custom_skills.css',
]
})
export class SkillDetailsComponent implements OnInit,OnDestroy {
  public selectedTree: any;
  private _subscriptions = new Subscription();
  constructor(public CommonService : CommonService) { }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
}
  ngOnInit() {
    this.subscribeOninit();
  }
  subscribeOninit() {
    this._subscriptions.add(this.CommonService.getSkillModelEvent().subscribe((obj: any) => {
        console.log(obj);
        if(obj.ModelShow == true){
          this.selectedTree =obj.selectedTree;
        }
    }));
  }
  closeSkillModel(){
    this.CommonService.setSkillModelEvent({},false);
  }
}
