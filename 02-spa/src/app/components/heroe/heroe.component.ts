import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroresService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};


  constructor( private activateRoute: ActivatedRoute,
               private _heroresService: HeroresService

    ){

      this.activateRoute.params.subscribe( params => {
          this.heroe = this._heroresService.getHeroe( params.id );
          console.log(this.heroe);
      });

  }
}
