import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MemberService {

  private routerPath: string = '/api/members/';

  constructor(private http: HttpClient) { }

  getAll = (): any => {
    return this.http.get(this.routerPath);
  }

  getById = (id: string): any => {
    return this.http.get(this.routerPath + id);
  }

  create = (member: any): any => {
    return this.http.post(this.routerPath, member);
  }

  update = (member: any,id: string): any => {
    delete member._id;
    return this.http.put(this.routerPath + id, member);
  }

  delete = (id: string): any => {
    return this.http.delete(this.routerPath + id);
  }
}
