export const state = () => ({
  products: {
    tables: [
      {
        id: 1,
        name: "Table 1",
        price: 149.95,
        description: ""
      },
      {
        id: 2,
        name: "Table 2",
        price: 189.95,
        description: ""
      },
      {
        id: 3,
        name: "Table 3",
        price: 299.95,
        description: ""
      }
    ],
    chairs: [
      {
        id: 1,
        name: "Chair 1",
        price: 99.95,
        description: ""
      },
      {
        id: 2,
        name: "Chair 2",
        price: 159.95,
        description: ""
      },
      {
        id: 3,
        name: "Chair 3",
        price: 199.95,
        description: ""
      }
    ]
  }
})

export const mutations = {}

export const getters = {
  products: state => {
    return state.products
  }
}
