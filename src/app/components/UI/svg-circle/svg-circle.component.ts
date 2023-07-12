import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-svg-circle',
  templateUrl: './svg-circle.component.html',
  styleUrls: ['./svg-circle.component.scss']
})
export class SvgCircleComponent implements OnInit {
  @Input() strokeDashOffsetPx =0
  @Input() strokeDashOffsetPxMob =0

  stroke= '#f87272'
  constructor(private themeService: ThemeService){}
  ngOnInit(): void {
    this.themeService.color.subscribe(color=> {
      this.stroke=color=='red'? '#f87272': color=='blue'? '#72f4f8':'#d882f8'
    })
   
  }
}
