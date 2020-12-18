import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/Heroe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe-buscar',
  templateUrl: './heroe-buscar.component.html',
  styles: [
  ]
})
export class HeroeBuscarComponent implements OnInit {

  listaHeroes: Heroe[] = [];
  termino: string;

  constructor(private _heroeServ: HeroesService, private _activ: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activ.params.subscribe((params) => {
      this.termino = params['termino'];
      this.listaHeroes = this._heroeServ.getHeroesByTermino(this.termino);
    });
  }

  verDetalle(idx: number){
    this._router.navigate(["/heroe", idx]);
  }

}
