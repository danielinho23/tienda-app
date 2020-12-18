<template>
    <div id="Product">
        <h2>Hola <span> {{product}}, </span> ¡Bienvenido!</h2>
    </div>
</template>

<script>
    export default {
        name: "Product",
        data:function(){
            return {
                product: "none"
            }
        },
        created: function(){
            this.product = this.$route.params.product
        }
    }
</script>


<style>
    #Product{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #Product h2{
        font-size: 50px;
        color: #283747;
    }
    #Product span{
        color: crimson;
        font-weight: bold;
    }

</style>