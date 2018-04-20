import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Clases/Producto';
import { ProductoServiceHttp } from '../../Servicio/listaCompraApi-Service/listaCompraApi-Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  productos: Array<Producto> = [];

  //--------------------------------------------------------------
  constructor(private servicio:ProductoServiceHttp) {
  }
  //--------------------------------------------------------------
  ngOnInit() {
    this.leerApiProductos();
  }
  //--------------------------------------------------------------
  guardar(model: Producto): void {   
    this.servicio.addProducto(model).subscribe(
      o => {this.productos.push(o);
    });
  }
  //--------------------------------------------------------------  
  private leerApiProductos() {
    this.servicio.getProductos().subscribe(datos => {
      this.productos = datos;
    });
  }
  //--------------------------------------------------------------
}
