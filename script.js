
		var nome = prompt("Por gentileza, qual seu nome?")
        alert("Que legal, " + nome + "! É um prazer ter você por aqui no Proabank.")
        var saldo = 1000;
		senha();


		function inicio() {

            var escolha = parseInt(prompt('Selecione uma opção: \n1. Saldo \n2. Extrato \n3. Saque \n4. Depósito \n5. Transferência \n6. Sair'));

            switch(escolha){
                case 1:
                    alert("Saldo");
                    ver_saldo();
                    inicio();
                    break;

                case 2:
                    alert("Extrato");
                    extrato();
                    inicio();
                    break;

                case 3:
                    alert("Saque");
                    fazer_saque();
                    inicio();
                    break;

                case 4:
                    alert("Depósito");
                    fazer_deposito();
                    inicio();
                    break;

                case 5:
                    alert("Transferência");
                    fazer_transferencia();
                    inicio();
                    break;

                case 6:
                    alert("Sair");
                    sair();
            }
    }

		function ver_saldo() {
			alert('Seu saldo atual é: R$ ' + saldo);
            inicio();
		}

		function extrato() {
			alert("Netflix -------- R$ 50,00 \nSpotify -------- R$ 20,00 \nRoupas -------- R$ 300,00 \nRestaurante -------- R$ 250,00 \nSabesp -------- R$ 110,00 \nEnel -------- R$ 90,00");
            inicio();
		}

		function fazer_saque() {
			
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();
			} else {
				saldo -= saque;
				//saldo = saldo - saque;
				ver_saldo();
			}
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			} else if (deposito <= 0){
				alert("Operação não autorizada.")
            } else {
				saldo += deposito;
				//saldo = saldo + deposito;
				ver_saldo();
			}
		}

		function fazer_transferencia() {
			var conta_transferencia = parseInt(prompt('Informe o número para transferência - sem pontos e/ou traços.'));
			var transferência = parseFloat(prompt('Qual valor para transferência?'));
			
			if(transferência <= 0){
				alert("Operação não autorizada.")
			} else if (transferência >= saldo){
				alert("Operação não autorizada.")
			} else if (transferência < saldo){
				saldo = saldo - transferência;
                alert('Transferência concluida com sucesso para conta: ' + conta_transferencia + '. \nValor trasnferido: R$' + transferência +'.\nSeu saldo atual é: ' + saldo)
			}
            inicio();
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 4.');
		}

		function erro2() {
			alert('Até breve '+ nome + '!');
            senha();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
                alert("É pena que você já vai, mas foi um prazer ter você aqui. Volte sempre, " + nome + ".")
				window.close();
			} else {
				inicio();
			}
		}

		function senha() {
			var senhaUser = parseInt(prompt('Digite sua senha, por gentileza.'));
			if (senhaUser === 3589){
				inicio();
			}
			else{
				alert("Operação não realizada.");
				erro2();
			}

		}