import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  tlt: any;  

  @ViewChild('trailer', { static: true })
  trailer: ElementRef<HTMLVideoElement> = {} as ElementRef ;

  constructor() {    

   }

  ngOnInit(): void {
    //console.log(this.trailer.nativeElement);
  }

  playVideo(){
    this.trailer.nativeElement.currentTime = 0;
    //this.vp.nativeElement.play();    
    this.trailer.nativeElement.autoplay = true;
  }

  stopVideo(){
    this.trailer.nativeElement.pause();
  }

}
