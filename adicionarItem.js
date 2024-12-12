const item = document.getElementById("input-item")
const ListaDeAfazeres = document.getElementById("ListadeAfazeres")
const botao = document.getElementById("button")
const mensagemListaVazia = document.getElementById("mensagemListaVazia")
const tarefasConcluidas = document.getElementById("tarefasConcluidas")

botao.addEventListener("click", (evento)=>{
    evento.preventDefault()
    if(item.value == ""){
        alert("Por favor insira um afazer")
        return
    }
    const itemDaLista = document.createElement("li")
    ListaDeAfazeres.appendChild(itemDaLista)

    const containerItemLista= document.createElement ("div")
    containerItemLista.classList.add("containerItemLista")
    itemDaLista.appendChild(containerItemLista)
    
    const containerCheckbox= document.createElement("div")
    containerCheckbox.classList.add("containerCheckbox")
    containerItemLista.appendChild(containerCheckbox)

    const checkboxInput = document.createElement("input")
    checkboxInput.type = "checkbox"
    checkboxInput.classList.add("inputCheckbox")
    containerCheckbox.appendChild(checkboxInput)
    checkboxInput.addEventListener("change",function(){
        if (checkboxInput.checked){
            removerItem(itemDaLista)
        }
    })

    const texto = document.createElement("p")
    texto.id = "item-titulo"
    texto.innerText= item.value
    containerCheckbox.appendChild(texto)

    const divBotao = document.createElement("div")
    containerItemLista.appendChild(divBotao)

    const botaoEditar = document.createElement("button")
    const botaoDeletar = document.createElement("button")
    botaoEditar.innerHTML = '<span class="material-symbols-outlined"> edit_note </span>'
    divBotao.appendChild(botaoEditar)
    botaoEditar.classList.add("buttonItemLista")
    botaoDeletar.innerHTML = '<span class="material-symbols-outlined"> delete_forever</span>'
    divBotao.appendChild(botaoDeletar)
    botaoDeletar.classList.add("buttonItemLista")

    const textoData = document.createElement("p")
    textoData.classList.add("textoData")
    var weekday = new Date().toLocaleDateString("pt-br", {weekday:"long"})
    var hora = new Date().toLocaleDateString("pt-br", {hour:"numeric",minute:"numeric"})
    textoData.innerText = `${weekday} ${hora}`
    itemDaLista.appendChild(textoData)
    
    botaoDeletar.addEventListener("click", function(){
        removerItem(itemDaLista)
    })
    botaoEditar.addEventListener("click", function(){
        editarItem(itemDaLista)
    })
    verificarListaVazia()
})

function verificarListaVazia(){
    console.log(ListaDeAfazeres.childElementCount);
    
    if(ListaDeAfazeres.childElementCount === 1){
        mensagemListaVazia.style.display = "block"
    }
    else{
        mensagemListaVazia.style.display= "none"
    }
}
function removerItem(elemento){
    var confirmacao = confirm("Tem certeza que deseja excluir essa tarefa? ")
    if (confirmacao){
        elemento.remove()
    }
}
function editarItem(elemento){
    var itemAtualizado = prompt("Altere o nome do seu afazer: ")
    if(itemAtualizado != null && itemAtualizado.trim()!=""){
        const itemTextoAtualizado = elemento.querySelector("#item-titulo")
        itemTextoAtualizado.textContent = itemAtualizado
        var weekday = new Date().toLocaleDateString("pt-br", {weekday:"long"})
        var hora = new Date().toLocaleDateString("pt-br", {hour:"numeric",minute:"numeric"})
        textoData.innerText = `${weekday} ${hora}`
    }
}