import axios from "axios"
import uuidv1 from "uuid/v1"

export const state = () => ({
  cart: [],
  cartUIStatus: "success"
})

export const mutations = {
  addToCart: (state, payload) => {
    let itemfound = state.cart.find(el => el.id === payload.id)
    itemfound ? (itemfound.quantity += payload.quantity) : state.cart.push(payload)
  },
  emptyCart: state => {
    state.cart = []
  },
  updateCartUI: (state, payload) => {
    state.cartUIStatus = payload
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

export const actions = {
  async postStripeFunction({ getters, commit }, payload) {
    commit("updateCartUI", "loading")

    try {
      await axios
        .post(
          "https://pedraal-serverless-ecommerce.netlify.com/.netlify/functions/stripe",
          {
            stripeEmail: payload.stripeEmail,
            stripeAmt: Math.floor(getters.cartTotal * 100), //it expects the price in cents, as an integer
            stripeToken: "tok_visa", //testing token, later we would use payload.data.token
            stripeIdempotency: uuidv1() //we use this library to create a unique id
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          if (res.status === 200) {
            commit("updateCartUI", "success")
            setTimeout(() => commit("clearCart"), 3000)
          } else {
            commit("updateCartUI", "failure")
            // allow them to try again
            setTimeout(() => commit("updateCartUI", "idle"), 3000)
          }

          console.log(JSON.stringify(res, null, 2))
        })
    } catch (err) {
      console.log(err)
      commit("updateCartUI", "failure")
      setTimeout(() => commit("updateCartUI", "idle"), 5000)
    }
  }
}
