<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title is-size-2 has-text-centered has-text-weight-light">
          Welcome on our
          <span class="is-size-1">Design showroom</span>
        </h1>
        <h2 class="subtitle has-text-centered">since 2002</h2>
        <div class="columns">
          <div class="column flex has-text-justified is-7">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut libero inventore quod laudantium, distinctio dolores molestias saepe dolorum hic praesentium sunt, labore ea obcaecati. Porro doloribus amet molestias esse voluptate rem doloremque atque repudiandae corrupti est labore non, dicta soluta? Iste enim debitis impedit error voluptatibus eaque, repellat obcaecati blanditiis eos et molestias dolores corporis reprehenderit, odit aliquam iusto praesentium saepe alias autem dicta sapiente quis. Repudiandae nostrum sit neque culpa praesentium voluptates repellendus voluptatem pariatur. Odio officia dolor dolores officiis velit, excepturi quae nulla! Natus sed, voluptates corporis veniam porro aspernatur tenetur necessitatibus illum pariatur quis quaerat saepe ut.</p>
          </div>
          <div class="column is-5">
            <img src="/pictures/tables-edit.jpg" alt="tables" width="400" height="400" />
          </div>
        </div>
      </div>
    </section>
    <div class="h-separator"></div>
    <section class="section services">
      <div class="container">
        <div class="columns">
          <div class="column flex is-4">
            <div class="service-wrapper has-text-centered">
              <span class="icon">
                <i class="fas fa-truck"></i>
              </span>
              <p class="heading is-size-4">FAST & FREE</p>
              <p class="title is-size-3">Global shipping</p>
            </div>
          </div>
          <div class="column flex is-4">
            <div class="service-wrapper has-text-centered">
              <span class="icon">
                <i class="fas fa-undo"></i>
              </span>
              <p class="heading is-size-4">EASY</p>
              <p class="title is-size-3">Online returns</p>
            </div>
          </div>
          <div class="column flex is-4">
            <div class="service-wrapper has-text-centered">
              <span class="icon">
                <i class="fas fa-concierge-bell"></i>
              </span>
              <p class="heading is-size-4">24/7</p>
              <p class="title is-size-3">Online support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="h-separator"></div>
    <section class="section sales">
      <div class="display">
        <h2 class="title has-text-weight-light is-size-1 has-text-grey-lighter">
          Summersales
          <br />
          <span class="has-text-grey-light is-size-2">on every chairs</span>
        </h2>
        <p id="discount">50%</p>
      </div>
      <img src="/pictures/chairs.jpg" alt="chairs" />
    </section>
    <div class="h-separator"></div>
    <section class="section featured">
      <div class="container">
        <h2 class="title has-text-weight-light has-text-centered">Featured products</h2>
        <div class="columns">
          <div class="column is-6">
            <ProductCard :product="products.chairs[0]" />
          </div>
          <div class="column is-6">
            <ProductCard :product="products.tables[0]" />
          </div>
        </div>
      </div>
    </section>
    <div class="h-separator"></div>
    <section class="section testimonial">
      <div class="container">
        <h2 class="title has-text-weight-light has-text-centered">Testimonials</h2>
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification">
                  <div class="media">
                    <div class="media-left">
                      <p class="image is-64x64">
                        <img src="/pictures/woman-1.jpg" />
                      </p>
                    </div>
                    <div class="media-content">
                      <p>
                        <strong>Jane Doe</strong>
                        <br />
                        <span class="icon">
                          <span class="fas fa-quote-left"></span>
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dignissimos.
                        <span
                          class="icon"
                        >
                          <span class="fas fa-quote-right"></span>
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
                <article class="tile is-child notification">
                  <div class="media">
                    <div class="media-left">
                      <p class="image is-64x64">
                        <img src="/pictures/man-1.jpg" />
                      </p>
                    </div>
                    <div class="media-content">
                      <p>
                        <strong>Adam Johnson</strong>
                        <br />
                        <span class="icon">
                          <span class="fas fa-quote-left"></span>
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae molestiae perferendis sed veniam. Eligendi, consequuntur in?
                        <span
                          class="icon"
                        >
                          <span class="fas fa-quote-right"></span>
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <div class="media">
                    <div class="media-left">
                      <p class="image is-64x64">
                        <img src="/pictures/woman-2.jpg" />
                      </p>
                    </div>
                    <div class="media-content">
                      <p>
                        <strong>Elena Bale</strong>
                        <br />
                        <span class="icon">
                          <span class="fas fa-quote-left"></span>
                        </span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque culpa velit quaerat sint labore quidem tenetur optio tempore eaque, officiis eligendi in at facilis molestiae quos soluta nobis doloremque debitis quis, magnam dolorem iure saepe ab facere! Sapiente, impedit qui reiciendis quibusdam dignissimos, aspernatur voluptas aut molestiae iure delectus laboriosam fugiat facere beatae porro iste dolore eius eligendi omnis mollitia ea sunt tempora! Reprehenderit deserunt laboriosam inventore laborum aspernatur temporibus officiis fugiat praesentium, excepturi expedita, quasi vero dolore beatae! Exercitationem!
                        <span
                          class="icon"
                        >
                          <span class="fas fa-quote-right"></span>
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <div class="media">
                  <div class="media-left">
                    <p class="image is-64x64">
                      <img src="/pictures/man-2.jpg" />
                    </p>
                  </div>
                  <div class="media-content">
                    <p>
                      <strong>John Smith</strong>
                      <br />
                      <span class="icon">
                        <span class="fas fa-quote-left"></span>
                      </span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eveniet nam sequi ipsam nobis fugit corrupti facilis sit tenetur, quas nostrum vero repudiandae ut quaerat aliquam sed et quos ex corporis quisquam optio cumque. Voluptas quaerat fugit doloremque deserunt, autem harum repellat numquam blanditiis temporibus eius animi velit asperiores dolore?
                      <span
                        class="icon"
                      >
                        <span class="fas fa-quote-right"></span>
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  computed: {
    products() {
      return this.$store.getters["products/products"];
    }
  },
  components: {
    ProductCard
  }
};
</script>

<style lang="scss" scoped>
.h-separator {
  width: 80%;
  max-width: 400px;
  display: block;
  margin: 20px auto;
  height: 1px;
  background: #b9b4b4;
}
.section {
  &:first-of-type {
    h1 {
      position: relative;
      z-index: 1;
      font-family: "Open Sans Condensed", sans-serif;
      span {
        font-family: "Parisienne", cursive;
      }
    }
    h2 {
      position: relative;
      z-index: 1;
      font-family: "Montserrat", sans-serif;
    }

    .column {
      p {
        position: relative;
        z-index: 1;
      }
      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
  &.services {
    .service-wrapper {
      padding: 60px;
      border: 1px solid #b9b4b4;
      .icon {
        font-size: 80px;
      }
      p {
        &:first-of-type {
          margin-top: 20px;
        }
        font-family: "Open Sans Condensed", sans-serif;
      }
    }
  }
  &.sales {
    position: relative;
    padding-left: 0;
    padding-right: 0;

    .display {
      margin: 70px;
      position: absolute;
      z-index: 2;
      h2 {
        position: relative;
        z-index: 2;
        font-family: "Open Sans Condensed", sans-serif;
        span {
          font-family: "Montserrat", sans-serif;
        }
      }
      #discount {
        font-family: "Lexend Tera", sans-serif;
        font-weight: bold;
        font-size: 12rem;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        line-height: 0.8;
      }
    }
  }
  &.featured {
    h2 {
      font-family: "Open Sans Condensed", sans-serif;
    }
  }
  &.testimonial {
    h2 {
      font-family: "Open Sans Condensed", sans-serif;
    }
  }
}
@media screen and (max-width: 1024px) {
  .section {
    &.sales {
      .display {
        margin: 30px;
        #discount {
          font-size: 8rem;
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .section {
    &.sales {
      .display {
        margin: 30px;
        h2 {
          font-size: 2rem !important;
          span {
            font-size: 1.5rem !important;
          }
        }
        #discount {
          font-size: 4rem;
        }
      }
    }
  }
}
</style>
