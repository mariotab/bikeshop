   


export default { 
    state: {
        token3: localStorage.token || false
    },
    actions: {
    },
    mutations: {
        delToken(state){
            localStorage.removeItem("token")
            localStorage.removeItem("myBac")
            state.token3 = false
        },
        sucToken(state){
            state.token3 = localStorage.token
        }    
    },
    getters: {
    	getToken(state){
            return state.token3
        }
    }
};