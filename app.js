let app = new Vue({

    el: "#app",
    data() {
        return {
            contador: 1,
            palavra: "",
            palavras: [],
            anagramas: []
        }
    }
    , methods: {
        adicionapalavra() {
            //adiciona palavra na lista 
            if (!this.palavra) return alert("Escreva uma palavra valida na caixa");
            this.palavras.push(this.palavra);
            this.palavra = "";
            this.contador++;
        },
        confereanagrama(palavra1, palavra2) {
            //Verifica se as duas palavras tem o mesmo length
            if (palavra1.length !== palavra2.length) {
                return false;
            }
            //Organiza as duas strings em ordem alfabetica
            var s1 = palavra1.split('').sort().join('');
            var s2 = palavra2.split('').sort().join('');
            //Compara as duas palavras e verifica se são iguais
            return (s1 === s2);
        },
        percorreArray() {
            //Percorre a matriz multidimensional de palavras
            this.palavras.forEach((palavra, indexP) => {
                this.palavras.forEach((comparativo) => {
                    if (this.palavras.indexOf(comparativo) != indexP) {
                        if (this.confereanagrama(palavra, comparativo)) this.anagramas.push(palavra)
                    }
                })
            })
        },
        limpaArray() {
            //Limpa o array geral
            this.anagramas.forEach(anagrama => {
                this.palavras.splice(this.palavras.indexOf(anagrama), 1)
            })
        },
        limpaDuplicatas() {
            //Limpa duplicatas de palavras
            this.anagramas = this.anagramas.filter((atual, proximo) => {
                return this.anagramas.indexOf(atual) === proximo;
            })
        },
        executafuncao() {
            this.percorreArray();
            this.limpaDuplicatas();
            this.limpaArray();
            document.getElementById('resultado').style.display = "flex";
            
            //limpa a lista
            const listacompleta = document.getElementsByClassName('lista');
            for (let i = 0; i < listacompleta.length; i++ ){
                listacompleta[i].style.display = "none";
            }
        }
    }
})