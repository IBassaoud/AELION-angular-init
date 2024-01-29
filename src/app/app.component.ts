import { Component } from '@angular/core';
import { UserType } from './types/user-type';
import { IsSelectedType } from './types/selected-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-init';

  public counter: number = 0;

  private counterInterface: any;

  public users: Array<UserType & IsSelectedType> = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      role: 'administrator',
    },
    {
      id: 2,
      firstname: 'Ismail',
      lastname: 'Bassaoud',
      role: 'collaborator',
    },
    {
      id: 3,
      firstname: 'Louest',
      lastname: 'Théa',
      role: 'visitor',
    },
    {
      id: 4,
      firstname: 'Ray',
      lastname: 'Monde',
      role: 'visitor',
    },
  ];

  public showPassword: boolean = false;
  private showPasswordInterface: any;

  buttonStateContent: String = '-';
  buttonState = 0;

  ngOnInit(): void {
    this.counterInterface = setInterval(() => this.counter++, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.counterInterface);
    clearInterval(this.showPasswordInterface);
  }

  toggleShowPassword() {
    this.showPassword = true;
    this.showPasswordInterface = setInterval(
      () => (this.showPassword = false),
      2000
    );
  }

  handleSelectUser(user: IsSelectedType) {
    user.isSelected = !user.isSelected;
  }

  DeleteUser(event: Event, user: UserType) {
    event.stopPropagation();
    // this.users = this.users.filter((u) => u.id !== user.id);
    this.users.splice(this.users.indexOf(user), 1);
  }

  handleSelectAll(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.users.map((user) => (user.isSelected = true));
    } else {
      this.users.map((user) => (user.isSelected = false));
    }
  }

  get selectedUserCount(): number {
    return this.users.filter( u => u.isSelected === true).length;
  }
}
