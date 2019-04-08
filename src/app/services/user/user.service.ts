import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { StartupService } from '../startup/startup.service';

const USER_KEY = 'LGA_user_info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private startupService: StartupService) { }

  signOut() {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.clear();
    this.startupService.resetStartupData();
  }

  public saveUser(user: User) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,  JSON.stringify(user));
    this.startupService.initStartupData(user.uid);
  }

  public getUser(): User {
    const user = sessionStorage.getItem(USER_KEY);
    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  }

}
