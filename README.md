# Serverless e-commerce website

> A simple ecommerce website with serverless functions and static generation

This site is a demonstration project for my portfolio. The goal of this project is to develop a simple e-commerce website using Nuxt.js for static website generation, Stripe as payment API and netlify for hosting, serverless functions and form submission. No database is used because this project is a one-shot meaning its meant to be kept simple. To store our products, the vuex store is initialized holding product objects.

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
- Netlify forms for newsletter submission (which could be trivial to use, but meh, will be ok for this very simple project)

## What are the site needs

This website should have a nice header with a hero picture, some basic text to introduce the fake brand and a navbar.
The footer embeds an alternative nav menu, some social media links and a newsletter input.

The home page has to hold: - A product of the week - Some sales - Extra services (like quick delivery, customer service, etc.) - Testimonials

The website will display products into category pages and they will have a single product page.

It should also have a cart and checkout page.

The following pages will appear somewhere in a nav menu but will not be included at the moment in the project: - "About us" - Contact

## Learning purposes

I run this project to simply get better at coding simple and neat pieces of code for a modern e-commerce website. Another purpose of it is to get used to git and GitHub best practices.

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
