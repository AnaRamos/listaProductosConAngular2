import { Component, Input } from '@angular/core';
import { Producto } from '../../Clases/Producto';

@Component({
    moduleId: module.id,
    selector: 'listado-producto',
    templateUrl: 'listado-producto.html'
})

export class ListadoProductoComponent {
    @Input() productos: Array<Producto>;
/*
    displayProducto(producto: Producto) {
        console.log('ListadoProductoComponent: ');
        console.log(producto);
    }*/
}