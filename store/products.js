export const state = () => ({
  products: {
    tables: [
      {
        id: 1,
        name: "Table 1",
        image: "/pictures/table-1.jpg",
        price: 149.95,
        description: ""
      },
      {
        id: 2,
        name: "Table 2",
        image: "/pictures/table-2.jpg",
        price: 189.95,
        description: ""
      },
      {
        id: 3,
        name: "Table 3",
        image: "/pictures/table-3.jpg",
        price: 299.95,
        description: ""
      }
    ],
    chairs: [
      {
        id: 1,
        name: "Chair 1",
        image: "/pictures/chair-1.jpg",
        price: 99.95,
        description: ""
      },
      {
        id: 2,
        name: "Chair 2",
        image: "/pictures/chair-2.jpg",
        price: 159.95,
        description: ""
      },
      {
        id: 3,
        name: "Chair 3",
        image: "/pictures/chair-3.jpg",
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
