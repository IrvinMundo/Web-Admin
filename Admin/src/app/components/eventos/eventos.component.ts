import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html'
})
export class EventosComponent implements OnInit {

  eventos = [];
  claves = [];

  constructor(private info:InformacionService) {
    this.info.getEventos()
        .subscribe(resData => this.eventos = resData);
  }

  ngOnInit() {
  }

  borrar(id: string){
    this.info.deleteEvento(id).subscribe(resData => this.claves = resData);
  }

}
