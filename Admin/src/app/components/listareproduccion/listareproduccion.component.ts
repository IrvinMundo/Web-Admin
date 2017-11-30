import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-listareproduccion',
  templateUrl: './listareproduccion.component.html'
})
export class ListareproduccionComponent implements OnInit {

  canciones = [];
  claves = [];

  constructor(private info:InformacionService) {
    this.info.getCanciones()
        .subscribe(resData => this.canciones = resData);
  }

  ngOnInit() {
  }

  borrar(id: string){
    this.info.deleteCancion(id).subscribe(resData => this.claves = resData);
  }

}
