// const para valor fixos e o let permite alternancia de valor.
const inputItem = document.getElementById("input-item");
const botaoAdd = document.getElementById("adicionar-item");
let contador = 0;

botaoAdd.addEventListener("click", (evento) => {
    evento.preventDefault();
    if(inputItem.value == "") {
        alert("Por favor insira um item!");
        return;
    } 

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type - "checkbox";
    //inputCheckbox.id = "checkbox-" + contador++;

});
//funcion call back ou função de retorno que é a mesmsa coisa que uma função dentro de outra

