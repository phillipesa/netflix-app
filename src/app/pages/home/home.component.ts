import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuOpened = false;

  listTitles = [
    {
      trailer:'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover:'assets/images/guardios-da-galaxia.jpg',
      name:'Guardiões da Galaxia 1',
      relevance:98,
      age:0,
      parts: 2,
      categories:['Épico','Fantasia','Viagem no espaço']
    },
    {
      trailer:'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover:'assets/images/guardios-da-galaxia.jpg',
      name:'Guardiões da Galaxia 2',
      relevance:80,
      age:12,
      parts: 2,
      categories:['Épico','Fantasia','Viagem no espaço']
    },
    {
      trailer:'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover:'assets/images/guardios-da-galaxia.jpg',
      name:'Guardiões da Galaxia 3',
      relevance:55,
      age:18,
      parts: 2,
      categories:['Épico','Fantasia','Viagem no espaço']
    }
  ];


  setMenuState(state:boolean){
    this.menuOpened = state;
  }

  closeMenu(){
    this.menuOpened = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
