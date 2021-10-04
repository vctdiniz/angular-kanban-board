import { Task } from './model/task.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { _id: '', name: '', stage: '' };

  classElevation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  back() { }
  next() { }
  delete() { }

  hoverItem(event: any) {
    this.classElevation = event.type === 'mouseover' ? true : false;
  }

}
