import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {

    }
  },
  mutations: {
    AddCart(state, payload) {
      const { shopId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[productInfo._id]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += 1
      shopInfo[productInfo._id] = product
      state.cartList[shopId] = shopInfo
    },
    minusCart(state, payload) {
      const { shopId, productId } = payload
      const shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        return
      }
      const product = shopInfo[productId]
      if (!product || product.count <= 0) {
        return
      }
      product.count -= 1
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
