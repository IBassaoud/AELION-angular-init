import { environment } from './../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserType } from '../../../types/user-type';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = environment.userApiRoot;
  private apiKey: string = 'users';

  constructor(private http: HttpClient) { }

  findAll():Observable<Array<UserType>> {
    return this.http.get<Array<UserType>>(`${this.api}${this.apiKey}`)
  }

  getUser(id: string): Observable<UserType> {
    return this.http.get<UserType>(`${this.api}${this.apiKey}/${id}}`)
  }

  createUser(user: UserType):Observable<UserType> {
    return this.http.post<UserType>(`${this.api}${this.apiKey}`, user)

  }

  updateUser(user: UserType):Observable<UserType> {
    return this.http.put<UserType>(`${this.api}${this.apiKey}/${user.id}`, user)
  }

  deleteUser(id: string):Observable<void> {
    return this.http.delete<void>(`${this.api}${this.apiKey}/${id}`)
  }

}
