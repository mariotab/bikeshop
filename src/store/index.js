
import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'
import token from './components/token.js'
import home from './components/home.js'
import product from './components/productPage'


Vue.use(Vuex)

export default new Vuex.Store({  
    modules: {
        token,
        home,
        product
    }
})