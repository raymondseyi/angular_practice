import { Component } from '@angular/core';
import { TeamCardItemsComponent } from "../team-card-items/team-card-items.component";
import { TaskCardItemsComponent } from "../task-card-items/task-card-items.component";
import { DailyTasksItemsComponent } from "../daily-tasks-items/daily-tasks-items.component";
import { RecentTransactionCardItemsComponent } from "../recent-transaction-card-items/recent-transaction-card-items.component";

@Component({
  selector: 'app-cool-dashboard',
  standalone: true,
  imports: [TeamCardItemsComponent, TaskCardItemsComponent, DailyTasksItemsComponent, RecentTransactionCardItemsComponent],
  templateUrl: './cool-dashboard.component.html',
  styleUrl: './cool-dashboard.component.css'
})
export class CoolDashboardComponent {

}
