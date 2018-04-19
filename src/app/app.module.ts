import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './Componentes/main/app.component';
import { FormularioProductoComponent } from './Componentes/formulario-producto/formulario-producto-component';
import { ListadoProductoComponent } from './Componentes/listado-productos/listado-productos-component';
import { ProductoService } from './Servicio/listaCompraClase-Service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioProductoComponent,
    ListadoProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
