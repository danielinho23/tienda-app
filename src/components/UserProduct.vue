<template>

    <div>

            <body>
            <div id="UserProduct" class="user_product2">
            <h2>Tu producto es: <span> {{name}}  </span> </h2>
            <h2>Precio: <span> {{price}} COP </span> </h2>
            <h2>Oferta: <span> {{is_offer}}</span> </h2>
            </div>

            <h2> Consulta Producto </h2>
            
                <div>
                    <label for="name">ID</label>
                    <input type="text" class="form-control" id="ID" placeholder="Product ID" v-model="form.name">
                </div>

            <button v-on:click="viewproduct">Ver Producto</button>
            </body>  
            


    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'PostFormAxios',
    data(){
        return{
            form: {
                name: '',
                email: '',
                gender: '',
                refer: '',
                profession: [],
                message: '',
                satisfaction: '5',
                interested: [],
                terms: false
            }
        }
    },

    
    
    methods:{

    

        viewproduct: function(){
            var valor = document.getElementById("ID").value;
            let self = this
            axios.post(""https://tienda-api23.herokuapp.com/producto/" + valor)
                .then((result) => {
                    
                    self.name = result.data.name
                    self.price = result.data.price
                    self.is_offer = result.data.is_offer
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
        },
    }

}
</script>

<style>
    #UserProduct{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #UserProduct h2{
        font-size: 40px;
        color: #283747;
    }
    #UserProduct span{
        color: crimson;
        font-weight: bold;
    }
</style>

