import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class InformacionService {
  constructor(public http:Http) {  }

  getEventos(){
    return this.http.get("http://localhost:3000/api/Eventos")
      .map((res: Response) => res.json());
  }
  deleteEvento(id:string){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    var url:string = "http://localhost:3000/api/Eventos/" + id;
    return this.http.delete(url,{headers: headers})
      .map((res: Response) => res.json());
  }

  getPedidos(){
    return this.http.get("http://localhost:3000/api/Pedidos")
      .map((res: Response) => res.json());
  }
  deletePedido(id:string){
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      var url:string = "http://localhost:3000/api/Pedidos/" + id;
      return this.http.delete(url,{headers: headers})
        .map((res: Response) => res.json());
    }

  getCanciones(){
    return this.http.get("http://localhost:3000/api/Canciones")
      .map((res: Response) => res.json());
  }
  deleteCancion(id:string){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    var url:string = "http://localhost:3000/api/Canciones/" + id;
    return this.http.delete(url,{headers: headers})
      .map((res: Response) => res.json());
  }

}
