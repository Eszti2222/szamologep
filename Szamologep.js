//számolás elvégzése, feliratkozás a saját eseményre-----lámpa villogást befog????
import SzgLetrehoz from "./SzgLetrehoz.js";
import Gombok from "./Gombok.js";

export default class Szamologep {
    #aktIndex = 0;
    #lista = [];
    constructor(lista) {
        this.kattintottSzam = document.getElementsByClassName("szamGomb")[0];
        this.kattintottMuvelet = document.getElementsByClassName("muvGomb")[0];
        this.#lista = lista;
        new KattintottSzam(
            this.#lista[this.#aktIndex],
            //this.SzGep
            //Gombok.szamElem
        );
        new kattintottMuvelet(
            this.#lista[this.#aktIndex],
        );

        this.szamElem = document.getElementsByClassName("szamok")[0];
        this.muvElem = document.getElementsByClassName("muveletek")[0];
        this.esemenykezelok();
    }

    esemenykezelok() {
        //feliratkozunk a saját eseményünkre 
        window.addEventListener("kivalaszt", (event) => {
            console.log(event.detail)
            this.#aktIndex = event.detail;
            new KattintottSzam(
                this.#lista[this.#aktIndex]
            /*
            //NEM ÉRTEM ITT MINEK KÉNE TÖRTÉNJEN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            Galériás feladatban így csináltuk:
            new KiemeltKep(
                this.#lista[this.#aktIndex].kep,
                this.#lista[this.#aktIndex].cim,
                this.nagyKepElem
            */
            );

        })
    }
    
}

