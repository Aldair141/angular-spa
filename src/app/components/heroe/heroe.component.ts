import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/Heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  objHeroe: Heroe = null;

  constructor(private _activ: ActivatedRoute, private _heroeServ: HeroesService, private _router: Router) { }

  ngOnInit(): void {
    this._activ.params.subscribe((para) => {
      this.objHeroe = this._heroeServ.getHeroe(para['id']);
    });
  }

  retornar(){
    this._router.navigate(["/heroes"]);
  }

}
