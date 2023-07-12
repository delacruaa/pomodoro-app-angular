import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpenModal = new BehaviorSubject<boolean>(false)
  openModal() {
    this.isOpenModal.next(true)
    document.body.classList.add('no-scroll');
  }
  closeModal() {
    this.isOpenModal.next(false)
    document.body.classList.remove('no-scroll');
  }
}
