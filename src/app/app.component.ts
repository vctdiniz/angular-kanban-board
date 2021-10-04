import { Component, OnInit } from '@angular/core';
import { Task } from './components/task/model/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [
    { _id: '1', name: 'um', stage: 'done' },
    { _id: '2', name: 'dois', stage: 'backlog' },
    { _id: '3', name: 'tres', stage: 'doing' },
    { _id: '4', name: 'quatro', stage: 'backlog' },
    { _id: '5', name: 'cinco', stage: 'to do' },
  ];

  backlogTasks: Task[] = [];
  toDoTasks: Task[] = [];
  doingTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.backlogTasks = this.tasks.filter(item => item.stage === 'backlog');
    this.toDoTasks = this.tasks.filter(item => item.stage === 'to do');
    this.doingTasks = this.tasks.filter(item => item.stage === 'doing');
    this.doneTasks = this.tasks.filter(item => item.stage === 'done');
  }
}
