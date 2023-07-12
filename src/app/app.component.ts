import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pomodoro-app-angular';
  isOpenModal =false
  constructor(private modalService:ModalService) {}

  ngOnInit(): void {
    this.modalService.isOpenModal.subscribe(item=> {
      this.isOpenModal=item
    })
  }
}
