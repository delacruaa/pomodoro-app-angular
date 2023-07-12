import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  font = new BehaviorSubject<string>('"Kumbh Sans", sans-serif')
  color = new BehaviorSubject<string>('red')
  pomodoro = new BehaviorSubject<number>(45)
  short = new BehaviorSubject<number>(5)
  long=new BehaviorSubject<number>(15)
  activeTab=new BehaviorSubject<string>('pomodoro')
}
