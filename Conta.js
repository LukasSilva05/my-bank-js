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
            }
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo = this._saldo + valor;
    }

    transferir(valor, contaDestino) {
        if (this._saldo <= valor || valor < 0) {
            return;
        }
        this._saldo -= valor;
        contaDestino.depositar(valor);
    }
}

module.exports = Conta;