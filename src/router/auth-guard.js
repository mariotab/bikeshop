import store from '../store'

export default function (to, from, next) {
	
	if(store.getters.getToken){
		next()

	}else {
		next('/login')

	}
	
}