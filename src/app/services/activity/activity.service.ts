import { Injectable } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityItem } from '../../models/activity-item';
import { Observable, of } from 'rxjs';
import { Skill } from '../../models/skill';
import { HttpClient } from '@angular/common/http';
import { SkillCrreationModel } from '../../models/skill-creation-model';
import { SkillResponse, SkillsResponse } from 'src/app/models/skill-response';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private connectionString = 'https://lifegraphapi.azurewebsites.net/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getActivitiesByActivityTypeId(activityTypeId): Observable<Array<Skill>> {
    return of(this.activitiesMock.filter(e => e.parentSkillId === activityTypeId));
  }

  getAllSkills(): Observable<SkillsResponse> {
    //return of(this.skillsMock);
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills');
  }

  getSkillBySkillId(skillId: string): Observable<SkillResponse> {
    //return of(this.skillsMock.find(e => e.uid == skillId));
    return this.httpClient.get<SkillResponse>(this.connectionString + 'skills/' + skillId);
  }

  createNewSkill(skillCreationModel: SkillCrreationModel): Observable<SkillResponse> {
    return this.httpClient.post<SkillResponse>(this.connectionString + 'skills', skillCreationModel);
  }

  getSkillsBySkillIdAndUserId(skillId: any, userId: any): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/' + skillId + '/acquired/' + userId);
  }

  getAllSkillsBySkillId(skillId: string): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/' + skillId + '/all');
  }

  getSubskillsBySkillId(skillId: string): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/' + skillId + '/sub');
  }
  
  editSkill(skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.connectionString + 'skills/' + skill.uid, skill);
  }

  getNeededSkillsBySkillId(skillId: string): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/' + skillId + '/dependencies');
  }
  
  getRecommendedSkillsBySkillId(skillId: string): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/' + skillId + '/recommendations');
  }
  
  getFullfillSkillsBySkillId(skillId: string): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/' + skillId + '/fulfillments');
  }

  reParentSkill(skillId: string, parentSkillId: string): Observable<SkillsResponse> {
    return this.httpClient.put<any>(this.connectionString + 'skills/' + skillId + '/parent/' + parentSkillId, null);
  }

  acquireSkill(skillId: string, userId: string): Observable<any> {
    return this.httpClient.post<any>(this.connectionString + 'skills/' + skillId + '/to/' + userId, null);
  }

  getAcquiredSkillsByUSerID(userId: string): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/acquired/' + userId);
  }

  removeNeededSkill(sourceSkillId: string, targetkillId: string): Observable<any> {
    return this.httpClient.delete<any>(this.connectionString + 'skills/' + sourceSkillId + '/dependencies/' + targetkillId);
  }
  
  removeRecomendedSkill(sourceSkillId: string, targetkillId: string): Observable<any> {
    return this.httpClient.delete<any>(this.connectionString + 'skills/' + sourceSkillId + '/recommendations/' + targetkillId);
  }
  
  removeFullfilledSkill(sourceSkillId: string, targetkillId: string): Observable<any> {
    return this.httpClient.delete<any>(this.connectionString + 'skills/' + sourceSkillId + '/fulfillments/' + targetkillId);
  }

  addNeededSkill(sourceSkillId: string, targetkillId: string): Observable<any> {
    return this.httpClient.put<any>(this.connectionString + 'skills/' + sourceSkillId + '/dependencies/' + targetkillId, null);
  }
  
  addRecomendedSkill(sourceSkillId: string, targetkillId: string): Observable<any> {
    return this.httpClient.put<any>(this.connectionString + 'skills/' + sourceSkillId + '/recommendations/' + targetkillId, null);
  }
  
  addFullfilledSkill(sourceSkillId: string, targetkillId: string): Observable<any> {
    return this.httpClient.put<any>(this.connectionString + 'skills/' + sourceSkillId + '/fulfillments/' + targetkillId, null);
  }

  deleteSkill(skillId: string): Observable<any> {
    return this.httpClient.delete<any>(this.connectionString + 'skills/' + skillId);
  }
  
  searchSkillsByTitleAndDescription(text: string): Observable<SkillsResponse> {
    return this.httpClient.get<SkillsResponse>(this.connectionString + 'skills/find?q=' + text);
  }

  reactOnSkill(sourceSkillId: string, reactionId: number): Observable<any> {
    return this.httpClient.put<any>(this.connectionString + 'skills/' + sourceSkillId + '/reactions/' + reactionId, null);
  }
  
  activitiesMock: Array<Skill> = [
    {
      uid: '9F8D29C1DC114487945F6049255ECBD7',
      parentSkillId: 'phisical',
      iconUrl: '/assets/images/out_door_activity_img.png',
      title: 'Outdoor activities'
    },
    {
      uid: '411EDDD051C84220BA20EB4576AD3B09',
      parentSkillId: 'phisical',
      iconUrl: '/assets/images/travel_img.png',
      title: 'Travel'
    },
    {
      uid: 'E0E3F662A0274E358C61B73EAEC563E8',
      parentSkillId: 'phisical',
      iconUrl: '/assets/images/sport_img.png',
      title: 'Sports'
    },
    {
      uid: 'A6FCEF1794D94DDD839A817BDBB5FC5B',
      parentSkillId: 'mental',
      iconUrl: '/assets/images/brain-practice.png',
      title: 'Practice'
    },
    {
      uid: 'DA799358D143478CB1C9A4BA776D7662',
      parentSkillId: 'mental',
      iconUrl: '/assets/images/brain-theory.png',
      title: 'Theory'
    },
    {
      uid: '4DD07F5ACC98433782EB03ECF77316F0',
      parentSkillId: 'mental',
      iconUrl: '/assets/images/hobbies.png',
      title: 'Hobbies'
    }
  ] as Array<Skill>;

}
