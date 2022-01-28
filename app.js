let app =  new Vue ({

    el : "#app",
    data(){
        return{
            contador: 1 ,
            palavra: "",
            palavras: []


        }
    }
    ,methods:{
        adicionapalavra(){
            this.palavras.push(this.palavra)
            this.palavra = "";
        }
    }




})