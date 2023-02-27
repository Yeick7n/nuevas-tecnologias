new Vue({
    el:"main",

    data:{
        contador:0,
        articulos:[]
    },

    methods: {
        venta(n,v){
            this.compras +=1;
            var articulo = new Object();
            articulo.nombre = n
            articulo.valor = v 
            console.log(articulo)
        }
    },
})