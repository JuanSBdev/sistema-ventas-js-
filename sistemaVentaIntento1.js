class Producto{
     static contadorProducto = 0;
     constructor (nombre, precio){
     this._idProducto = ++Producto.contadorProducto;
     this._nombre = nombre;
     this._precio = precio;
    }
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }
    toString(){
        `Producto: ${this.idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}`
    }
}

let producto0 = new Producto ('Calzoncillo', 700);
let producto1 = new Producto ('Medias ', 400);
let producto2 = new Producto('Bandana', 850);

console.log(producto0);
console.log(producto1);
console.log(producto2);

class Orden{
    static contadorDeOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor (){
        this._idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this._contadorProductosAgregados;

    }
    get idOrden(){
        return this._idOrden;
    }
        agregarProducto(producto){
        if(this._productos.length < MAX_PRODUCTOS){
            this.productos.push(producto);
        }
        else {'Numero maximo de productos alcanzado';}
    }
    calcularTotal(){
        totalVentas = 0;
        for(let producto of this._productos){
            totalVentas += producto.precio;
        }
        return totalVentas;

    }
    mostrarOrden(){
        let productoOrden = '';
        for ( let producto of this._productos){
            productoOrden += producto.toString;
        }
        console.log(`Orden: ${this._idOrden}, total ${this.calcularTotal()}, productos: ${productosOrden} `)
    }
}
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto0);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();
orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1 + producto2);

orden2.mostrarOrden();  

