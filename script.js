    <script>

        function comeco(){
            var escolha = prompt("Olá, espero que esteja bem!\nQual exercício você quer visualizar?\n(1 a 11)");
            if(escolha == 1){
                exercicio1();
            }else if(escolha == 2){
                exercicio2();
            }else if(escolha == 3){
                exercicio3();
            }else if(escolha == 4){
                exercicio4();
            }else if(escolha == 5){
                exercicio5();
            }else if(escolha == 6){
                exercicio6();
            }else if(escolha == 7){
                exercicio7();
            }else if(escolha == 8){
                exercicio8();
            }else if(escolha == 9){
                exercicio9();
            }else if(escolha == 10){
                exercicio10();
            }else if(escolha == 11){
                exercicio11();
            }else{
                alert("Por gentileza, insira um valor válido!");
                comeco();
            }   
        }
        comeco();

        
        function exercicio1() {
            function Inicio() {
                var num1 = parseInt(prompt("Digite o primeiro valor:"));
                var num2 = parseInt(prompt("Digite o segundo valor:"));
                while (num2 <= 0) {
                    alert("Digite o segundo valor maior que zero.");
                    num2 = parseInt(prompt("Digite o segundo valor:"));
                }
                var divisao = num1 / num2;
                document.write("O resultado é: " + divisao);
            }
            Inicio();
        }

        function exercicio2() {
            var contagem = 30;
            while (contagem >= 0) {
                document.write("Explode em: " + contagem + " segundos. <br>");
                contagem--;
                if (contagem < 0) {
                    document.write("Explosão");
                }
            }
        }

        function exercicio3() {
            var contagem = 10;
            while (contagem >= 1) {
                document.write(contagem + "<br>");
                contagem--;
            }
        }

        function exercicio4() {
            var num = 15;
            while (num <= 100) {
                num += 1;
                if (num > 100) {
                    var media = num / 85;
                }
            }
            document.write("O valor da média aritmética é: " + media);
        }

        function exercicio5() {
            var num1 = parseInt(prompt("Digite o primeiro número:"));
            var num2 = parseInt(prompt("Digite o segundo número:"));
            var valMedia = num2 - num1;
            var media1 = (num1 + num2) / 2;
            while (num1 <= num2) {
                num1 += 1;
                if (num1 > num2) {
                    var media2 = num1 / valMedia;
                }
            }
            document.write("O valor da média aritmética é: " + media1);
            document.write("<br> O valor da segunda média aritmética é: " + media2);
        }

        function exercicio6() {
            var opcao = prompt("Quer calcular outra média? S ou N");
            while (opcao == "S") {
                var a = parseInt(prompt("Nota 1: "));
                var b = parseInt(prompt("Nota 2: "));

                var media = (a + b) / 2;
                if (media >= 9.5) {
                    document.write("A média é: " + media + " - Aluno aprovado <br>");
                } else {
                    document.write("A média é: " + media + " - Aluno reprovado <br>");
                }
                var opcao = prompt("Quer calcular outra média? S ou N");
            }
        }

        function exercicio7() {
            var n1 = prompt("Nota 1");
            var n2 = prompt("Nota 2");
            var n3 = prompt("Nota 3");
            var n4 = prompt("Nota 4");
            var n5 = prompt("Nota 5");
            var n6 = prompt("Nota 6");
            var media = (n1 + n2 + n3 + n4 + n5 + n6) / 6;
            if (n1, n2, n3, n4, n5, n6 <= 10) {
                alert("sua média é: " + media);
            } else {
                (n1, n2, n3, n4, n5, n6 < 0);
                alert("Por gentileza, informe outro número");
            }
        }

        function exercicio8() {
            function inicio() {
                var valor = 1;
                var valorUsu = parseInt(prompt("Digite um valor maior que 1:"));
                if (valorUsu <= 1) {
                    alert("Digite um valor válido");
                    inicio();
                }
                while (valor <= valorUsu) {
                    document.write(valor + "<br>");
                    valor++
                }
            }
            inicio();
        }

        function exercicio9() {
            var valor = 101;
            while (valor < 111) {
                document.write(valor + "<br>");
                valor++;
            }
        }

        function exercicio10() {
            var n = parseInt(prompt("Digite um número"));
            var multiplicação = 0;
            var começo = 1;

            while (começo <= n) {

                while (multiplicação <= 10) {
                    document.write(começo + " X " + multiplicação + " = " + (começo * multiplicação) + "<br>");
                    multiplicação++;
                }
                começo++;
                multiplicação = 0;
                document.write("<br><br>");
            }
        }

        function exercicio11() {
            var numeros = [];
            var numerosNoIntervalo = [];
            var numerosFora = [];
            for (var i = 0; i < 10; i++) {
                var numero = parseInt(prompt("Digite um número"));
                numeros[i] = numero;
            }

            for (var i = 0; i < numeros.length; i++) {
                if (numeros[i] >= 24 && numeros[i] <= 42) {
                    numerosNoIntervalo.push(" " + numeros[i]);
                } else {
                    numerosFora.push(" " + numeros[i]);
                }
            }

            if (numerosNoIntervalo.length == 0) {
                document.write("Os valores entre 24 e 42 foram <b>" + numerosNoIntervalo.length + "</b> <br>");
            } else {
                document.write("Os valores entre 24 e 42 foram <b>" + numerosNoIntervalo.length + "</b> (" + numerosNoIntervalo + ")<br>");
            }

            if (numerosFora.length == 0) {
                document.write("Os valores menores que 24 ou maiores que 42 foram <b>" + numerosFora.length + "</b>");
            } else {
                document.write("Os valores menores que 24 ou maiores que 42 foram <b>" + numerosFora.length + "</b> (" + numerosFora + ")");
            }
        }

    </script>