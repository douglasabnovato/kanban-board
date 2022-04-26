function addCard(elemento) {
  const ulId = elemento.previousElementSibling.id;
  const text = prompt("Qual é a tarefa?");
  const board = document.getElementById(ulId);

  const template = `
    <li id="${new Date().getTime()}">
        <p>${text}</p>
        <p onclick="removeCard(this)" class="remove">x</p>
    </li>
  `;

  board.innerHTML += template;

}

function removeCard(elemento) {
    document.getElementById(elemento.parentElement.id).remove();
}
  