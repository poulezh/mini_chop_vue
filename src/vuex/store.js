import {createStore} from 'vuex'
import axios from 'axios'

let store = createStore({
	state: {
		//храним переменные, обьекты, состояния, массивы
		products: [],
		cart:[]
	},
	mutations: {
		//меняем данные state (синхронные)
		SET_PRODUCTS_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			state.cart.push(product)
		},
		DELETE_ITEM: (state, cart) =>{
			console.log(state.cart);
			console.log(cart, 'cart');
		}
	},
	actions: {
		//async
		async GET_PRODUCTS_FROM_API({commit}){
			return await axios('http://localhost:3000/products', {
				method: 'GET',

			})
			.then((products) => {
				commit('SET_PRODUCTS_STATE', products.data)
				return products
			})
			.catch((err) => {
				console.log(err);
				return err;
			})
		},
		ADD_TO_CART({commit}, product){
			commit('SET_CART', product)

		},
		DELETE_CART_ITEM({commit}, cart){
			commit('DELETE_ITEM', cart)

		}
	},
	getters: {
		// короткий путь до получения инфы о  state
		PRODUCTS(state){
			return state.products
		},
		CART(state){
			return state.cart
		},

	}

})

export default store;