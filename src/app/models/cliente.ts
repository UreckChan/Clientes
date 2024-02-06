export class Cliente{
    constructor(
        public id:number,
        public nombre:string,
        public rfc:string,
        public domicilio:string,
        public tipoCliente:number
    ){}
}