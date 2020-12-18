<template>
    <div id="UserProduct" class="user_product2">
        <h2> ID:<span> {{product}}  </span> </h2>
        <h2>Tu producto es: <span> {{name}}  </span> </h2>
        <h2>Precio: <span> {{price}} COP </span> </h2>
        <h2>Oferta: <span> {{is_offer}}</span> </h2>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserProduct',
    data: function (){
        return {
            product: "",
            name:"",
            price:"",
            is_offer:"",
        }
    },

    created: function(){
        this.product = this.$route.params.product
        let self = this
        axios.get("http://127.0.0.1:8000/producto/" + this.product)
            .then((result) => {
                self.name = result.data.name
                self.price = result.data.price
                self.is_offer = result.data.is_offer
            })
            .catch((error) => {
                alert("ERROR Servidor");
            });
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
        font-size: 50px;
        color: #283747;
    }
    #UserProduct span{
        color: crimson;
        font-weight: bold;
    }
</style>

