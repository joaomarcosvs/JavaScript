
import{
    criarItemLista
} from "../scripts/criarItemLista.js";

import verificarListaVazia from "../scripts/verificaListaVazia.js";

const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", (evento) => {

    evento.preventDefault();  //preventDefault previni a ação padrão do que esta sendo executado
    //console.log(inputItem.value);

    const itemDaLista = criarItemLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);

});

verificarListaVazia(listaDeCompras);