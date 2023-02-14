new Vue({
    el:"main",
    data:{ 
        mensaje: "Hola mundo",
        edad:0,
        duplicado:0,
        mostrar:true
    },
    methods: {
        duplicar(){
            this.duplicado=this.edad*2

        }
    },
})