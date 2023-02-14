new Vue({
    el: "main",
    data: {
        mensaje: "digite su edad",
        mostrar: true,
        edad: 0,
        foto: 0
    },
    methods: {
        EdadFoto() {
            if (this.edad <= 5)
                this.foto = 1
            else if(this.edad > 5 && this.edad <= 20)
            this.foto = 2
            else if(this.edad > 20 && this.edad <= 40)
            this.foto = 3
            else
            this.foto = 4
        }
    }
})