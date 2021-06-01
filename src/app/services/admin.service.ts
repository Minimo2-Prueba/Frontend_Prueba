import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //Funcion registro admin
  registerAdmin(admin: Admin) {
    return this.http.post(environment.apiURL + '/admin/registerAdmin', admin);
  }
}
