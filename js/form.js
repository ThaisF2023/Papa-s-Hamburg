let botaoAdicionar = document.querySelector('#adiciona-cliente')
botaoAdicionar.addEventListener('click', function (evento){
    evento.preventDefault()
    let form = document.querySelector('#form-adiciona')
    let cliente = obtemClienteDoForm(form)
    
    adicionaClienteNaTabela(cliente)

    form.reset()
})

function obtemClienteDoForm(form){
    let cliente = {
        nome: form.nome.value,
        n_pessoas: form.n_pessoas.value,
        data: form.data.value,
        hora: form.hora.value,
    
    }
    return cliente
}
function adicionaClienteNaTabela(cliente){
    let clienteTr = montarTr(cliente)
    let tabela = document.querySelector('#tabela-cliente')
    tabela.appendChild(clienteTr)
    }

function montarTr(cliente){

    let clienteTr = document.createElement('tr')
    clienteTr.classList.add('cliente')

    clienteTr.appendChild(montarTd(cliente.nome,"info-nome"))
    clienteTr.appendChild(montarTd(cliente.n_pessoas,"info-numero"))
    clienteTr.appendChild(montarTd(cliente.data,"info-data"))
    clienteTr.appendChild(montarTd(cliente.hora,"info-hora"))
    

    return clienteTr

}

function montarTd(dado, classe){

    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td 
}