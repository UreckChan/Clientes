import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
