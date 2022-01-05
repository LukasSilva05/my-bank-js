const prompt = require('prompt-sync')({ sigint: true });
const BD = require('./BD');
const Cliente = require('./Cliente');
const Conta = require('./Conta');

const bd = new BD();

function iniciar() {
    do {
        exibeMenu();
        opcao = Number(prompt('Opção: '));
        escolheOpcao(opcao);
    } while (opcao != 9);
}

function exibeMenu() {
    console.log("\n\n\t Escolha a opção desejada");
    console.log("1 - Consultar Extrato");
    console.log("2 - Sacar");
    console.log("3 - Depositar");
    console.log("4 - Cadastrar Conta");
    console.log("5 - Listar Contas");
    console.log("6 - Transferir");
    console.log("9 - Sair");
}

function escolheOpcao(opcao) {

    switch (opcao) {
        case 1:
            numConta = Number(prompt('Informe o número da conta: '))
            conta = bd.lerConta(numConta);
            console.log(`Saldo: ${conta._saldo}`)
            break;

        case 2:
            console.log('Implementar saque.');
            break;

        case 3:
            console.log('Implementar deposito.');
            break;

        case 4:
            console.log("Cadastrar nova conta.");

            const novoCliente = new Cliente();
            novoCliente.nome = prompt('Informe o nome: ');
            novoCliente.cpf = prompt('Informe o CPF: ');
            novoCliente.fone = prompt('Informe o telefone: ');
            novoCliente.endereco = prompt('informe o endereço: ');

            const novaConta = new Conta();
            novaConta.agencia = Number(prompt('Informe a agencia: '));
            novaConta.numero = Number(prompt('Informe o número da conta: '));
            novaConta._saldo = Number(prompt('Informe o saldo inicial: '))
            novaConta.cliente = novoCliente;

            bd.cadastrarConta(novaConta);

            console.log("\nConta cadastrada com Sucesso!")
            break;

        case 5:
            console.log('Listando contas: ');
            bd.listarContas();
            break;

        case 6:
            console.log('Implementar transferir.')
            break;

        case 9:
            console.log('Saindo da aplicação.');
            break;

        default:
            console.log("Opção inválida");
    }
}

iniciar();