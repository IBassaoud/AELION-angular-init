import { take } from 'rxjs';
import { UserService } from '../services/user/user.service';
import { UserType } from './../../types/user-type';
import { Component } from '@angular/core';
import { SelectedType } from '../../types/selected-type';
import { displyedColumnType } from '../../types/displayed-column-type';
import { UserSorter } from '../services/user/_helpers/user-sorter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  users: Array<UserType & SelectedType> = [];
  displayedColumns: Array<displyedColumnType> = [
    { name: 'id', label: 'id'},
    { name: 'name', label: 'name'},
    { name: 'role', label: 'role'},
    { name: 'createdAt', label: 'created at'},
    { name: 'birthdate', label: 'birthdate'},
    { name: 'gender', label: 'gender'},
  ];

  private userSorter = new UserSorter();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .findAll()
      .pipe(
        take(1) // Get the first emit then close subscription
      )
      .subscribe({
        next: (
          // Your logic goes heres
          users: UserType[]
        ) => {
          this.users = users;
          console.log(this.users);
          
        },
        error: (error) => {
          // Deal with error as you want
        },
        complete: () => {
          // Just nothing special... emission was completed
        },
      });
  }

  handleSelectAll(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.users.map((user) => (user.isSelected = true));
    } else {
      this.users.map((user) => (user.isSelected = false));
    }
  }

  handleSelectUser(user: SelectedType) {
    user.isSelected = !user.isSelected;
  }

  createUser(){
    console.log('Creating user...');
  }


  get selectedUserCount(): number {
    return this.users.filter( user => user.isSelected === true).length;
  }

  get totalUsers(): number {
    return this.users.length;
  }

  sort(column: string): void {
    this.users = this.userSorter.sort(this.users, column);
    
  }
}
