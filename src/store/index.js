import { createStore } from 'vuex'

export default createStore({
  state: {
    
      shopCart: [],
      userInfo: null,
      totalPrice: null,
  },
  getters: {
   
  
  },
  mutations: {
    setUserInfo(state, data) {
        state.userInfo = data;
    },
    addCart(state, data) {
      state.shopCart.push(data);
    },
    setCart(state, data) {
      state.shopCart = data;
    },
    setTotalPrice(state,data1){
      state.totalPrice = data;
    },
    setQuantity(state, {index, quantity}) {
      state.shopCart[index].quantity = quantity;
    }
  },
  actions: {

  },
  modules: {

  }
})
