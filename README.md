# Serverless e-commerce website

> A simple ecommerce website with serverless functions and static generation

This site is a demonstration project for my portfolio. The goal of this project is to develop a simple e-commerce website using Nuxt.js for static website generation, Stripe as payment API and netlify for hosting, serverless functions and form submission. No database is used, this project is meant to be kept simple. To store our products, the vuex store is initialized holding product objects.

> This project is highly inspired by Sarah Drasner's talk at JAMstack nation conf, you can check it out [here](https://www.youtube.com/watch?v=COAVmST41Q0)

## Stack

### Front end:

- Vue.js as javascript framework
- Nuxt.js as Static generator
- Bulma as css framework for basic styling

### Back end:

- Netlify hosting and build process
- Github as repo source for Netlify
- Stripe as online payment
- Netlify functions for serverless API calls


## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
