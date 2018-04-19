import { Injectable } from '@angular/core';
import { Producto } from '../Clases/Producto';

const PRODUCTOS: Array<Producto> = [
    new Producto(1,'Memoria USB',150.0,30,'Memoria Micro Sd Adata 64gb Clase 10 Sdhc+ Adaptador Full Hd'),
    new Producto(2,'Pendrive USB',180.0,25,'Pendrive Kingston 4 Gb, Usb 3.0 Nuevo En Blister'),
    new Producto(3,'Disco Duro',300.0,4,'Disco Duro Interno Pc Sata 1tb Rigido Western')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ProductoService{
    getProductos(){
        return new Promise<Producto[]>(resolve => {
            setTimeout(() => {
                resolve(PRODUCTOS);
            }, 
            FETCH_LATENCY);
        });
    }

    addProducto(producto: Producto){
        PRODUCTOS.push(producto);
    }
}