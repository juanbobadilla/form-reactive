export class Persona {

    id:number;
    nombre:string;
    clave:string;
    producto:string;
    promocion:boolean;

    constructor(nombre:string, clave:string, producto:string, promocion:boolean, id?:number)
    {
        this.nombre = nombre;
        this.clave = clave;
        this.producto =producto;
        this.promocion = promocion;
        this.id = id;
    }
    
    

}