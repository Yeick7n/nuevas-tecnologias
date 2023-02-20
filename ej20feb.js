new Vue({
    el: "main",
    data: {
        Nombre: '',
        saludo: ''
    },
    methods: {
        mensaje() {
            this.saludo = "Bienvenido Sr " + this.Nombre
        }
    },
})