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
    console.log("\n-----------------------------------------------------------\n\n\t\t Escolha a opção desejada\n");
    console.log("1 - Consultar Extrato");
    console.log("2 - Sacar");
    console.log("3 - Depositar");
    console.log("4 - Cadastrar Conta");
    console.log("5 - Listar Contas");
    console.log("6 - Transferir");
    console.log("7 - Apagar Conta");
    console.log("9 - Sair\n");
}

function escolheOpcao(opcao) {

    switch (opcao) {
        case 1:
            numConta = Number(prompt('Informe o número da conta: '))
            conta = bd.lerConta(numConta);
            if (conta == undefined) {
                console.log(`\nEssa conta não existe!\nPor favor, informe uma conta válida.`)
                return
            }
            console.log(`\nSaldo da conta: R$ ${conta._saldo}`)
            break;

        case 2:
            console.log("\nSacar\n-----------------------------------------------------------\n")
            numConta = Number(prompt('Informe o número da conta: '))
            conta = bd.lerConta(numConta);
            if (conta == undefined) {
                console.log(`\nEssa conta não existe!\nPor favor,informe uma conta válida.`)
                return
            }
            valor = Number(prompt('Informe a quantia do saque: R$ '))
            if (valor == "" || isNaN(valor)) {
                console.log("\nQuantia inválida!")
                return
            }
            conta.sacar(valor)
            break;

        case 3:
            console.log("\nDepositar\n-----------------------------------------------------------\n")
            numConta = Number(prompt('Informe o número da conta: '))
            conta = bd.lerConta(numConta);
            if (conta == undefined) {
                console.log(`\nEssa conta não existe!\nPor favor,informe uma conta válida.`)
                return
            }
            valor = Number(prompt('Informe a quantia: R$ '))
            if (valor == "" || isNaN(valor)) {
                console.log("\nQuantia inválida!")
                return
            }
            conta.depositar(valor)
            break;

        case 4:
            console.log("\nCadastrar nova conta\n-----------------------------------------------------------\n");

            const novoCliente = new Cliente();
            novoCliente.nome = prompt('Informe o nome: ');
            while (novoCliente.nome == "" || Number(novoCliente.nome) || novoCliente.nome.length < 2) {
                console.log("\nEsse nome não é válido!")
                novoCliente.nome = prompt('Informe o nome novamente: ');
            }
            novoCliente.cpf = prompt('Informe o CPF: ');
            while (novoCliente.cpf == "" || isNaN(novoCliente.cpf) || novoCliente.cpf.length > 11) {
                console.log("\nEsse CPF não é válido!")
                novoCliente.cpf = prompt('Informe o CPF novamente: ');
            }
            novoCliente.fone = prompt('Informe o telefone: ');
            while (novoCliente.fone == "" || isNaN(novoCliente.fone) || novoCliente.fone.length > 11) {
                console.log("\nEsse telefone não é válido!")
                novoCliente.fone = prompt('Informe o telefone novamente: ');
            }
            novoCliente.endereco = prompt('informe o endereço: ');
            while (novoCliente.endereco == "") {
                console.log("\nEsse endereço não válido!")
                novoCliente.endereco = prompt('informe o endereço novamente: ');
            }

            const novaConta = new Conta();
            novaConta.agencia = Number(prompt('Informe a agencia: '));
            while (novaConta.agencia == "" || isNaN(novaConta.agencia) || novaConta.agencia.length > 3) {
                console.log("\nEssa agência não é válida!")
                novaConta.agencia = Number(prompt('Informe a agencia novamente: '));
            }
            novaConta.numero = Number(prompt('Informe o número da conta: '));
            while (novaConta.numero == "" || isNaN(novaConta.numero)) {
                console.log("\nEsse número não é válido!")
                novaConta.numero = Number(prompt('Informe o número da conta novamente: '));
            }
            novaConta._saldo = 0.0
            novaConta.cliente = novoCliente;

            bd.cadastrarConta(novaConta);

            console.log("\nConta cadastrada com Sucesso!")
            break;

        case 5:
            console.log('\n-----------------------------------------------------------\nListando contas: \n');
            bd.listarContas();
            break;

        case 6:
            console.log('\nTransferir\n-----------------------------------------------------------\n')
            numConta1 = Number(prompt('Informe o número da sua conta: '))
            conta1 = bd.lerConta(numConta1);
            if (conta1 == undefined) {
                console.log(`\nEssa conta não existe!\nPor favor,informe uma conta válida.`)
                return
            }
            valor = Number(prompt('Informe a quantia: R$ '))
            if (valor == "" || isNaN(valor)) {
                console.log("\nQuantia inválida!")
                return
            }
            numConta2 = Number(prompt('Informe o número da outra conta: '))
            conta2 = bd.lerConta(numConta2);
            if (conta2 == undefined) {
                console.log(`\nEssa conta não existe!\nPor favor,informe uma conta válida.`)
                return
            }
            conta1.transferir(valor, conta2)
            break;

        case 7:
            console.log('\nApagar Conta\n-----------------------------------------------------------\n')
            numConta = Number(prompt('Informe o número da conta: '))
            conta = bd.lerConta(numConta);
            if (conta == undefined) {
                console.log(`\nEssa conta não existe!\nPor favor, informe uma conta válida.`)
                return
            }
            bd.apagarConta(conta)
            console.log(`\nConta ${numConta} deletada!`)
            break;
        case 9:
            console.log('\nSaindo da aplicação\n-----------------------------------------------------------');
            break;

        default:
            console.log("\nOpção inválida");
    }
}

iniciar();