import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss']
})
export class FontComponent implements OnInit {
  @Input() font = ''
  @Input() item = ''
  type=''

  ngOnInit() {
    if (this.item =='"Kumbh Sans", sans-serif')  this.type = "sans" 
    if (this.item =='"Space Mono", monospace')  this.type = "monospace" 
    if (this.item =="'Roboto Slab', serif")  this.type = "serif" 
  }
  
}
