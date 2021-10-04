import { TaskModule } from './../task/task.module';
import { StageCardComponent } from './stage-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [StageCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    TaskModule
  ],
  exports: [StageCardComponent]
})
export class StageCardModule { }
