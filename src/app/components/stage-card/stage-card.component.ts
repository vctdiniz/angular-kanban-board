import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task/model/task.interface';

@Component({
  selector: 'app-stage-card',
  templateUrl: './stage-card.component.html',
  styleUrls: ['./stage-card.component.css']
})
export class StageCardComponent implements OnInit {
  @Input() stageTitle: string = '';
  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
