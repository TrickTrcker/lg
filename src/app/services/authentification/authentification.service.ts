import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserResponse } from '../../models/user/user-response';
import { TokenStorage } from '../../core/token.storage';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  private connectionString = 'https://lifegraphapi.azurewebsites.net/';
  
  constructor(private httpClient: HttpClient,
    private token: TokenStorage,
    private userService: UserService) { }

  login(username: string, password: string): Observable<HttpResponse<UserResponse>> {
    const credentials = { usernameOrEmail: username, secret: password };
    
    return this.httpClient.post<UserResponse>(this.connectionString + 'authentication/issue', credentials, {observe: 'response'});
  }

  logout() {
    this.token.signOut();
    this.userService.signOut();
  }
}
