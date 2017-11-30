import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Routes
import { APP_ROUTING } from './app.routes';

//COmponents
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ListareproduccionComponent } from './components/listareproduccion/listareproduccion.component';

//Services
import { InformacionService } from './services/informacion.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EventosComponent,
    PedidosComponent,
    ListareproduccionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
