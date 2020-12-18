import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../models/Heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() objHeroe: Heroe;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verDetalle(){
    this.heroeSeleccionado.emit(this.objHeroe.id);
  }

}
