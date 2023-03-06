new Vue({
    el:"main",

    data:{
        compras:0,
        articulos:[],
        respuesta:0
        
    },

    methods: {
        venta(n,v){
            this.compras +=1;
            var articulo = new Object();
            articulo.nombre = n
            articulo.valor = v 
            this.articulos.push(articulo)
            console.log(articulo)
        },

        total(){
            this.respuesta=this.valor+this.valor
            
        }
    },
})