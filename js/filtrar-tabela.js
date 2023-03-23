let campoFiltro = document.querySelector('#filtrar-tabela')

campoFiltro.addEventListener('input', function(){

     if(this.value.length > 0){
        for(let i=0; i < cliente.length; i++){
            let cliente = cliente[i]
            let tdNome = cliente.querySelector('.info-nome')
            let nome = tdNome.textContent
            let expressao = new RegExp(this.value, 'i')

            if(!expressao.test(nome)){
                cliente.classList.add('invisivel')      
            } else{
                cliente.classList.remove('invisivel')
            }
        }
     }else {
        for(let i=0; i< cliente.length; i++){
            let cliente=clientes[i]

            cliente.classList.remove('invisivel')
        }
     }
})