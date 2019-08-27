import data from "../data/products.js"

let request = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.products)
    }, 500)
  })
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await request()
    commit("products/setProducts", response)
  }
}
