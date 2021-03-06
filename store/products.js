export const state = () => ({
  products: []
})

export const mutations = {
  setProducts: (state, payload) => {
    state.products = payload
  }
}

export const getters = {
  products: state => {
    return state.products
  }
}
