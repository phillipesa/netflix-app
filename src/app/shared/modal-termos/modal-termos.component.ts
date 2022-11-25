import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-termos',
  templateUrl: './modal-termos.component.html',
  styleUrls: ['./modal-termos.component.scss']
})
export class ModalTermosComponent implements OnInit {

  @Output()
  modalToggle: EventEmitter<boolean> = new EventEmitter();

  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
    this.modalToggle.emit(this.mostrar);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
