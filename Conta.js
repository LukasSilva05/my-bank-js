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
        if (valor > 0) {
            this._saldo = this._saldo + valor;
        }
    }

    transferir(valor, contaDestino) {
        if (this._saldo <= valor || valor < 0) {
            console.log("\nQuantia inválida!")
            console.log(`\nSaldo atual: R$ ${conta1._saldo}`)
        } else {
            this._saldo -= valor;
            contaDestino.transferencia(valor);
            console.log("\nTransferência efetuada com sucesso!")
            console.log(`\nSaldo atual: R$ ${conta1._saldo}`)
        }
    }
}

module.exports = Conta;