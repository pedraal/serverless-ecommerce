export const state = () => ({
  cart: [],
  cartUIStatus: "idle"
})

export const mutations = {
  addToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id)
    itemfound ? (itemfound.quantity += payload.quantity) : state.cart.push(payload)
  },
  emptyCart: state => {
    state.cart = []
  }
}

export const getters = {
  cart: state => {
    return state.cart
  },
  cartUIStatus: state => {
    return state.cartUIStatus
  },
  cartCount: state => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity, 0)
  },
  cartTotal: state => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0)
  }
}
