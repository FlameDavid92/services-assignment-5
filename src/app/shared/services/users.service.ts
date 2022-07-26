import { Injectable } from '@angular/core';
import { UsersActionsCounter } from './users-actions-counter.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private usersActionsCounter: UsersActionsCounter) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.usersActionsCounter.toInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.usersActionsCounter.toActive();
  }
}
