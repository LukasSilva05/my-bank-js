class Conta {
    agencia;
    numero;
    cliente;
    _saldo = 0.0;

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            if (valor > 0) {
                this._saldo = this._saldo - valor;
                console.log("\nSaque concluído!")
                console.log(`\nSaldo atual: R$ ${conta._saldo}`)
            } else {
                console.log("\nQuantia inválida!")
                console.log(`\nSaldo atual: R$ ${conta._saldo}`)
            }
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("\nQuantia inválida!")
            console.log(`\nSaldo atual: R$ ${conta._saldo}`)
        } else {
            this._saldo = this._saldo + valor;
            console.log("\nQuantia Depositada!")
            console.log(`\nSaldo atual: R$ ${conta._saldo}`)
        }
    }

    transferencia(valor) {
        if (valor <= 0) {
            console.log("\nQuantia inválida!")
            console.log(`\nSaldo atual: R$ ${conta._saldo}`)
        } else {
            this._saldo = this._saldo + valor;
            console.log(`\nSaldo atual: R$ ${conta._saldo}`)
        }
    }

    transferir(valor, contaDestino) {
        if (this._saldo <= valor || valor < 0) {
            console.log("\nQuantia inválida!")
        } else {
            this._saldo -= valor;
            contaDestino.transferencia(valor);
            console.log("\nQuantia transferida!")
        }
    }
}

module.exports = Conta;