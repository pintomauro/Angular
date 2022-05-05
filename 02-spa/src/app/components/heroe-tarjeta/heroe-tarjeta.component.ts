import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index!: number;

  @Output() hereoSeleccionado!: EventEmitter<number>;

  constructor( private router: Router) {
    this.hereoSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // console.log ( this.index );
    this.router.navigate( ['/heroe', this.index] );
    // this.hereoSeleccionado.emit( this.index );



  }

}
