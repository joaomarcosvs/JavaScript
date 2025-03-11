const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;  // Aqui uso let porque ele diferente da constante pode ser mudado de valor e ele vai servir de i (indice como no C)

botaoAdicionar.addEventListener("click", (evento) => {

    evento.preventDefault();  //preventDefault previni a ação padrão do que esta sendo executado
    console.log(inputItem.value);

    if(inputItem.value == ""){
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

    // Tudo precisa ser vinculado ao HTML, então vamos fazer isso com uma arvora, de pai para filho
    // Está de trás para frente, do ele mais filho ao maior pai
    
    containerItemDaLista.appendChild(inputCheckbox);  //INPUT filho do DIV
    containerItemDaLista.appendChild(nomeItem);  //P filho do DIV

    itemDaLista.appendChild(containerItemDaLista);  //DIV filho do LI

    listaDeCompras.appendChild(itemDaLista); //LI filho do UL


}
)
