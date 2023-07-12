import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  tabs = ['pomodoro', 'short break', 'long break']
  activeTab = 'pomodoro'
  pomodoro = 45
  long=15
  short = 5
  constructor(private themeService:ThemeService) {}
  ngOnInit(): void {
    this.themeService.activeTab.subscribe(tab=> {
      this.activeTab = tab
    })
    this.themeService.pomodoro.subscribe(pomodoro=> {
      this.pomodoro = pomodoro
    })
    
    this.themeService.long.subscribe(long=> {
      this.long =long
      
    })
    this.themeService.short.subscribe(short=> {
      this.short =short
    })
  }

  changeActiveTab(tab:string) {
    this.themeService.activeTab.next(tab)
  }
}
