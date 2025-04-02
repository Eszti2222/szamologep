import Gombok from "./Gombok";

export default class SzgLetrehoz{
    #lista=[];
    constructor(lista,szuloElem){
        this.#lista=lista;
        this.szuloElem=szuloElem;
        this.megjelenit();
        }
    megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            const SZGEP = new SzGep(element.kep,element.cim,index,this.szuloElem)
                
        }
}