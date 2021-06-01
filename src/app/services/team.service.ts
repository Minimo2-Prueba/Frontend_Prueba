import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../model/user';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get<Team[]>(environment.apiURL + '/team/all');
  }

  newTeam(newTeam: Team) {
    return this.http.post(environment.apiURL + '/team/new', newTeam);
  }

  addUser(newUser: User, teamName: string) {
    return this.http.post(environment.apiURL + '/team/newUser/' + teamName, newUser);
  }

  //Update
  updateUser(_id: string, updateUser: User){
    return this.http.put(environment.apiURL + '/user/update/' + _id, updateUser);
  }
}
