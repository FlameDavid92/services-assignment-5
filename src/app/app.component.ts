import { Component, OnInit } from '@angular/core';
import { UsersActionsCounterModel } from './shared/models/users-actions-counter.model';
import { UsersActionsCounterService } from './shared/services/users-actions-counter.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  counters: UsersActionsCounterModel;

  constructor(private usersActionsCounterService: UsersActionsCounterService) {}

  ngOnInit(): void {
    this.counters = this.usersActionsCounterService.counters;
  }
}
