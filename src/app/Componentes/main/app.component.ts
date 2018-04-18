import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Clases/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  productos: Array<Producto> = [];

  constructor() {

  }

  ngOnInit() {
    this.productos.push(new Producto(1,'Memoria USB',150.0,30,'Memoria Micro Sd Adata 64gb Clase 10 Sdhc+ Adaptador Full Hd'));
    this.productos.push(new Producto(2,'Pendrive USB',180.0,25,'Pendrive Kingston 4 Gb, Usb 3.0 Nuevo En Blister '));
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
