///este es nuevo archivo para hacer los routing para cada componente


import vueRouter from 'vue-router'
import User from './components/User'
import UserAuth from './components/UserAuth'
///import Product from './components/Product'
import UserProduct from './components/UserProduct'
import App from './App'

const router = new vueRouter({
    
    mode: 'history',
    base: __dirname,
    routes: [
        {
        path: '/',
        name: "root",
        component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/auth',
            name: "user_auth",
            component: UserAuth
        },
/*
        {
        path: '/product/:product',
        name: "product",
        component: Product
        },
*/
        {
            path: '/user/product/',
            name: "user_product2",
            component: UserProduct
        },

    ]
})
export default router