usuario = {
    nome: "Rafaela",
    email: "rafaela@gmail.com",
    qt_atualizacoes: 2,
    foto: "imgs/perfil.jpg"
}

function showhide(div_id){
    el = document.querySelector("#"+div_id)
    if(el.classList.contains('hide'))
        el.classList.remove('hide')
    else
        el.classList.add('hide')
}

function openclose(e){
    if(!e.classList.contains('h-100p'))
        e.classList.add('h-100p')
    else
        e.classList.remove('h-100p')
}

function adicionar_conteudo(assunto = "Assunto", nome = "Maria", quantidade_likes = 0, quantidade_respostas = 0, texto = "Relato"){
    
    // assunto = 'Assunto da pergunta'
    // nome = 'Carlos Silva'
    // quantidade_likes = 1
    // quantidade_respostas = 2
    // texto = 'Também ínteressante lembrar que o relato inscreve'

    estrutura_item_lista = `
        <div class="card card-body py-3 my-3">
            <b class="t-orange">${assunto}</b>
            <small class="font-size-13p mb-4">${nome}</small>
            <p class="fs-6">
                ${texto}
            </p>
            <div class="d-flex gap-3 align-items-center">
                <span class="material-icons bg-orange-3 text-white p-1 rounded font-size-1">favorite</span>
                <span class="font-size-14p">${quantidade_likes} like</span>
                <span class="font-size-14p">${quantidade_respostas} Resposta</span>
            </div>
        </div>
    `

    div = document.createElement("div")
    div.innerHTML = estrutura_item_lista
    campo_listagem_comentarios.insertBefore(div.children[0], campo_listagem_comentarios.children[0])
}

btn_criar_topico.onclick=function(){
    adicionar_conteudo(input_assunto.value, usuario.nome+" - "+usuario.email, 0, 0, input_conteudo.value )
    showhide('input_formulario_disc')
    showhide('msg_alert')
}