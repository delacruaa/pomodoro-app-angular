import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TimerComponent } from './components/timer/timer.component';
import { ModalComponent } from './components/modal/modal.component';
import { FontComponent } from './components/UI/font/font.component';
import { ColorComponent } from './components/UI/color/color.component';
import { CdTimerModule } from 'angular-cd-timer';
import { SvgCircleComponent } from './components/UI/svg-circle/svg-circle.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    TimerComponent,
    ModalComponent,
    FontComponent,
    ColorComponent,
    SvgCircleComponent
  ],
  imports: [
    BrowserModule,
    CdTimerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
