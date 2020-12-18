import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/Heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  @Output() activarBuscador : EventEmitter<boolean>;

  lstHeroes: Heroe[] = [];

  constructor(private _serv: HeroesService, private _router: Router) {
    this.activarBuscador = new EventEmitter();
  }

  ngOnInit(): void {
    this.lstHeroes = this._serv.getHeroes();
    this.activarBuscador.emit(true);
  }

  verDetalle(idx: number){
    this._router.navigate(["/heroe", idx]);
  }

}