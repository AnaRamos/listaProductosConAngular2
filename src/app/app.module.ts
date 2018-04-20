import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './Componentes/main/app.component';
import { FormularioProductoComponent } from './Componentes/formulario-producto/formulario-producto-component';
import { ListadoProductoComponent } from './Componentes/listado-productos/listado-productos-component';
import { ProductoService } from './Servicio/listaCompraFile-Service/listaCompraClase-Service';
import { ProductoServiceHttp } from './Servicio/listaCompraApi-Service/listaCompraApi-Service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioProductoComponent,
    ListadoProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductoService, ProductoServiceHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
