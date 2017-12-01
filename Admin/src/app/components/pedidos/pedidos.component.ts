import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {

  pedidos = [];
  claves = [];

  constructor(private info:InformacionService) {
    this.info.getPedidos()
        .subscribe(resData => this.pedidos = resData);
  }

  ngOnInit() {
  }

  borrar(id: string){
    this.info.deletePedido(id).subscribe(resData => this.claves = resData);
    this.info.getPedidos()
        .subscribe(resData => this.pedidos = resData);
    
  }

}
