new Vue({
    el:"main",
    data:{
        resultado:0,
        numberOne:'',
        numbertwo:'',
        op:''
    },
    methods: {
        unir(valor) {
            this.numberOne += valor;
            this.resultado = this.numberOne;
        },

        cambio(v){
            this.numbertwo = this.numberOne
            this.numberOne = ''
            this.resultado = 0
            this.op = v
        },

        resta(){
            this.numbertwo=numberOne
            this.numberOne=''
            this.resultado=0
        },

        operacion(){
            switch(this.op){
                case'+': this.resultado= parseInt(this.numberOne)+parseInt(this.numbertwo)
                     break;
                case'-': this.resultado= parseInt(this.numbertwo)-parseInt(this.numberOne)
                     break;
            }
        }
    }
})