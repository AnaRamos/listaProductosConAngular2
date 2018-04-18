import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../Clases/Producto';

@Component({
    moduleId: module.id,
    selector: 'formulario-producto',
    templateUrl: 'formulario-producto.html'
})
export class FormularioProductoComponent implements OnInit {

    model: Producto = new Producto(0, '', 0, 0);
    @Output() onsubmit = new EventEmitter<any>();

    constructor() { }

    public submit() {
        this.onsubmit.emit(this.model);
        console.log(this.model);
        this.model = new Producto(0, '', 0, 0);
    }

    ngOnInit() {
        console.log('FormularioProductoComponent inicializado ***********');
    }

}
