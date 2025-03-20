export const szamokLista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let szamElem = document.querySelector(".container");
let txt =" ";

    for (let index = 0; index < szamokLista.length; index++) {
        txt+=`<div class="szamok">
            <button type="button">${szamokLista[index]}]</button>
            </div>
            `
    }
    szamElem.innerHTML+=txt;