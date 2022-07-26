import { Injectable } from '@angular/core';
import { UsersActionsCounterModel } from '../models/users-actions-counter.model';

@Injectable({ providedIn: 'root' })
export class UsersActionsCounter {
  counters = new UsersActionsCounterModel(0, 0);

  toInactive() {
    this.counters.activeToInactiveCount++;
  }

  toActive() {
    this.counters.inactiveToActiveCount++;
  }
}
