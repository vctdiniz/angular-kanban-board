import { TaskModule } from './components/task/task.module';
import { TaskInputModule } from './components/task-input/task-input.module';
import { StageCardModule } from './components/stage-card/stage-card.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StageCardModule,
    TaskInputModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
