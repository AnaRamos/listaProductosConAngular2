import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Clases/Producto';
import { ProductoService } from '../../Servicio/listaCompraClase-Service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  productos: Array<Producto> = [];

  constructor(private servicio:ProductoService) {

  }

  ngOnInit() {
    this.servicio.getProductos().then(
      datos => {
        this.productos = datos;
      }
    );
  }

  guardar(model: Producto): void {
    let v=Math.max.apply(Math,this.productos.map(function(o){return o.id;}));
    model.id=++v;
    this.productos.push(model);
    /*this.productoService.addProducto(model).subscribe(o => {

      this.productos.push(o);
    });*/
  }

}
