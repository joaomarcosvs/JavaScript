import criarDiaSemana from "./criarDiaSemana.js";

const inputItem = document.getElementById("input-item");

let contador = 0;  // Aqui uso let porque ele diferente da constante pode ser mudado de valor e ele vai servir de i (indice como no C)


export function criarItemLista() {

    if (inputItem.value == "") {
        alert("Por favor digite algo!");
        return;
    }

    // Será criada uma variavel para inserir um elemento no DOM, no caso vaou criar a lista.
    const itemDaLista = document.createElement("li");

    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container"); // Adicionei a classe ao elemento criado.

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;  //Aqui simplesmente reproduzi uma repetição para toda vez que o botão for clicado adicionar mais um ao id checkbox-i, para criar varias itens

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;  // Sempre que o botão for clicado o texto excrito será salvo no P (paragrafo)

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    const dataCompleta = criarDiaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;

    // Tudo precisa ser vinculado ao HTML, então vamos fazer isso com uma arvora, de pai para filho
    // Está de trás para frente, do ele mais filho ao maior pai

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    itemDaLista.appendChild(itemData);
    itemData.classList.add("texto-data");

    return itemDaLista;

}