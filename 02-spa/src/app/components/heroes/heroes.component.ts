import { Component, OnInit } from '@angular/core';
import { HeroresService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroresService,
               private router: Router
              ) {
    // console.log('conastructor');
  }

  ngOnInit(): void {
    this.heroes  = this._heroesService.getHeroes();
    // console.log ( this.heroes );

  }

  verHeroe( idx: number ){
    this.router.navigate( ['/heroe', idx] );

  }

}
