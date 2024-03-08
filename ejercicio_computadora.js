class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca =marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return "tipoEntrada: " + this._tipoEntrada + ", marca: " + this._marca;
    }

}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, marca: ${this._marca}, tipoEntrada: ${this._tipoEntrada} ]`;
    }

}



class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){    
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }


    toString(){
        return `Teclado[ idTeclado: "${this._idTeclado}, tipoEntrada: "${this._tipoEntrada}, marca: "${this._marca}]`;
    }
}


class Monitor{
    static  contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }


    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamanio: ${this._tamanio}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputador = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `Computadora: [idComputadora: ${this._idComputador} \n 
            ${this._monitor} \n
            ${this._teclado}  \n
            ${this._raton}
        ]`;
    }
}


class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras =[];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = "";
        for (let computadora of this._computadoras) {
            computadorasOrden +='\n{' + computadora.toString() + '} ';
        }
        console.log(`Orden:${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1  = new Raton("USB","HP");
console.log(raton1.toString());
let raton2  = new Raton("USB","DELL");
console.log(raton2.toString());

let teclado1 = new Teclado("Alámbrico","Astro");
console.log(teclado1.toString());
let teclado2 = new Teclado("USB","DELL");
console.log(teclado2.toString());

let monitor1 = new Monitor("DELL", "32\"");
console.log(monitor1.toString());
let monitor2 = new Monitor("SAMSUNG", "40\"");
console.log(monitor2.toString());

let compu1 = new Computadora("LENOVO",monitor1,teclado1,raton2);
console.log(compu1.toString());
let compu2 = new Computadora("DELL",monitor2,teclado2,raton1);
console.log(compu2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(compu1);
orden1.agregarComputadora(compu2);
orden1.mostrarOrden(); 