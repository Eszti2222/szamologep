// gombok létrehozása és saját esemény létrehozása kattintáskor ----Lámpa villog??? 
export default class Gombok {

    //#szamErtek
    szamokLista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //#muvErtek
    muveletLista = ["+", "-", "*", "/", ".", "=", "C"];
    //#indexErtek

    constructor(szamokLista, muveletLista, indexErtek, szuloElem) {
        // this.#szamErtek = szamErtek;
        //this.#muvErtek = muvErtek;
        this.szamokLista = szamokLista;
        this.muveletLista = muveletLista;
        //this.#indexErtek = szamokLista[i];
        this.szuloElem = document.querySelector(".container");
        this.megjelenitSzamok();
        this.megjenitMuveletek();

        this.szamElem = document.querySelector(".szamok:last-child");
        this.szamElem.addEventListener("click", () => {
            //console.log(this.#indexErtek);
            console.log(this.szamokLista[index]);
            const e = new CustomEvent("kivalaszt",  { detail:this.szamokLista[index]});//{ detail: this.#indexErtek });
            window.dispatchEvent(e);
        });

        this.muvElem = document.querySelector(".muvelet:last-child");
        this.muvElem.addEventListener("click", () => {
            //console.log(this.#indexErtek);
            console.log(this.szamokLista[index]);
            const e = new CustomEvent("kivalaszt", { detail:this.szamokLista[index]});//{ detail: this.#indexErtek });
            window.dispatchEvent(e);
        });


    }
}

megjelenitSzamok(){
    /*HTML kódban elhelyezzük a képet az adataival */
    let html = `<div class="szamok">
                <button  type="button" value="${this.szamokLista[index]}">${this.szamokLista[index]}</button>
                </div>
    </div>`;
    /*innerHTML -html kódot illesztünk be, de nem kapunk HTML DOM objektumot ezért insertAdjacentHTML  */
    this.szuloElem.insertAdjacentHTML("beforeend", html);
}

}
megjenitMuveletek(){
    let txt = `<div class="muveletek">
                <button  type="button" value="${this.muveletLista[index]}">${this.muveletLista[index]}</button>
                </div>
    </div>`;
    /*innerHTML -html kódot illesztünk be, de nem kapunk HTML DOM objektumot ezért insertAdjacentHTML  */
    this.szuloElem.insertAdjacentHTML("beforeend", txt);
}


