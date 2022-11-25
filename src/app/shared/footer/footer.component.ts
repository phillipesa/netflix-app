import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @Input()
  modalToggle = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.modalToggle);
  }

  setModal(){
    this.modalToggle = true;
  }

}
