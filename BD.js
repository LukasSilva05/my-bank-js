const Conta = require('./Conta');

class BD {

    contas = new Map();


    cadastrarConta(conta) {
        this.contas.set(conta.numero, conta)
    }

    lerConta(numero) {
        if (this.contas.has(numero)) {
            return this.contas.get(numero);
        }
    }

    listarContas() {
        console.log('Número de contas: ' + this.contas.size)
        console.log('Contas: ');
        for (var [key, value] of this.contas) {
            console.log(`Nº: ${key} | Nome: ${value.cliente.nome} | CPF: ${value.cliente.cpf}`)
        }
    }

    apagarConta(conta) {
        this.contas.delete(conta.numero);
    }

    atualizarConta(conta) {
        if (this.contas.has(conta.numero)) {
            this.contas.set(conta.numero, conta)
        }
    }
}

module.exports = BD