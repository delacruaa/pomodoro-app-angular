import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  font ='"Kumbh Sans", sans-serif'
  fontArray =['"Kumbh Sans", sans-serif','"Space Mono", monospace',"'Roboto Slab', serif" ]
  color='red'
  colorArray =['red', 'blue', 'purple']
  constructor(private themeService:ThemeService,private modalSevice:ModalService) {}

  formGroup!:FormGroup
  submitted=false
  ngOnInit(): void {
    this.themeService.font.subscribe(font=> {
      this.font = font
    })
    this.themeService.color.subscribe(color=> {
      this.color = color
    })
    this.formGroup = new FormGroup({
      localPomodoro:new FormControl(this.themeService.pomodoro.value, [Validators.required, Validators.min(1),
        Validators.max(60)]),
      localShort:new FormControl(this.themeService.short.value, [Validators.required, Validators.min(1),
        Validators.max(60)]),
      localLong:new FormControl(this.themeService.long.value, [Validators.required, Validators.min(1),
        Validators.max(60)]),
    })
  }

  changeFont(font:string) {
    this.themeService.font.next(font)
    document.body.style.fontFamily=font
    
  }
  changeColor(color:string) {
    this.themeService.color.next(color)
    document.body.setAttribute('color-theme' , color)
  }
  saveSettings() {
    this.submitted=true
    if(this.formGroup.valid) {
      this.submitted=false
      this.themeService.pomodoro.next(this.formGroup.value.localPomodoro)
      this.themeService.short.next(this.formGroup.value.localShort)
      this.themeService.long.next(this.formGroup.value.localLong)
      this.closeModal()
    }
  }

  closeModal() {
    this.modalSevice.closeModal()
  }
  
}
