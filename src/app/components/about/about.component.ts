import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  irCatalogo(){
    this._router.navigate(["/heroes"]);
  }
}
