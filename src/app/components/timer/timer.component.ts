import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
   time = 0
   interval=0
   isRunning=false
   isRunned=false
   currentSec = 0
   strokeDashOffsetPx= 0
   strokeDashOffsetPxMob =0
   pomodoro = 0
   activeTab ='pomodoro'
   long=15
   short = 5
   formattedTime = ''
   color='red'
   constructor(private themeService: ThemeService, private modalService:ModalService) {}
   ngOnInit(): void {
    this.themeService.pomodoro.subscribe(pomodoro=> {
      this.pomodoro = pomodoro
      this.checkTab()
    })
    this.themeService.long.subscribe(long=> {
      this.long =long
      this.checkTab()
    })
    this.themeService.short.subscribe(short=> {
      this.short =short
      this.checkTab()
    })
    this.themeService.activeTab.subscribe(activeTab=> {
      this.activeTab =activeTab
      this.isRunning=false
      this.isRunned=false
      this.checkTab()
    })
    
   }
  handleStart(){
    this.isRunning=true
    this.isRunned=true
    this.timerInterval()
  };
  handlePause() {
    this.isRunning=false
    clearInterval(this.interval);
    this.formattedTime =  new Date(this.time * 1000).toISOString().substr(14, 5);
  };
  handleResume(){
    this.isRunning=true
    this.timerInterval()
  };
  handleRestart() {
    this.checkTab()
    this.handleStart()
  }

  checkTab = () => {
    if ( this.activeTab  == "pomodoro") {
      this.timerData(this.pomodoro)
    }
    if ( this.activeTab  == "short break") {
      this.timerData(this.short)
    }
    if ( this.activeTab  == "long break") {
      this.timerData(this.long)
    }
    clearInterval(this.interval);
  };

  timerData(tab:number) {
    this.time = tab*60
    this.currentSec = tab *60
    this.strokeDashOffsetPx= this.time* (1130/this.currentSec)
    this.strokeDashOffsetPxMob =this.time* (790/this.currentSec)
    this.formattedTime =  new Date(this.time * 1000).toISOString().substr(14, 5);
  }
  timerInterval() {
     //@ts-ignore
     this.interval = setInterval(() => {
      if(this.time > 0) {
        this.time--;
        this.formattedTime =  new Date(this.time * 1000).toISOString().substr(14, 5);
        this.strokeDashOffsetPx= this.time* (1130/this.currentSec)
        this.strokeDashOffsetPxMob =this.time* (790/this.currentSec)
      }else {
        this.playAudio()
      }
      
    },1000)
    
  }
  playAudio(){
    
    new Audio('/assets/sound.mp3').play()


 };

  openModal() {
    this.modalService.openModal()
  }
}
