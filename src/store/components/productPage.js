import VueResource from 'vue-resource';
import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
    state: {
       data:[]
    },
    actions: {
    },
    mutations: {
    	addData (state, {id ,barcode, title, price, discount, vat, href}){
    		state.data = [id,barcode, title, price, discount, vat, href]
    		console.log(state.data)
    	}
    },
    getters: {
        getProduct(state){
            return state.data
        }
    }
};