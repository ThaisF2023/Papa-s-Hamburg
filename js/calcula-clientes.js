
let clientes = document.querySelectorAll('.cliente')
let quantidadeClientes = document.querySelector('.qtdCliente')

let soma = 0


for (let i = 0; i <= clientes.length; i++) {
   let cliente = clientes[i];
   let qtdcliente = cliente.querySelector('.info-numero')
   let valor = Number(qtdcliente.textContent)


   soma = soma + valor

   quantidadeClientes.textContent = soma

}
