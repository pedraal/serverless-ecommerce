<template>
  <div>
    <div class="hero container">
      <div id="design">Design</div>
      <div id="unique">Unique</div>
      <div id="sober">Sober</div>
      <div id="comfort" class="has-font-light">Comfort</div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background: url("/pictures/hero-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 50px 150px 110px 1fr;
  grid-template-rows: 100px 100px 100px;
  div {
    font-size: 4rem;

    &#design {
      font-size: 10rem;
      color: #9c9898;
      font-family: "Parisienne", cursive;
      grid-area: 3/1/4/5;
      place-self: end stretch;
    }
    &#unique {
      font-family: "Montserrat", sans-serif;
      grid-area: 1/3/2/5;
    }
    &#sober {
      font-family: "Open Sans Condensed", sans-serif;
      grid-area: 2/2/3/5;
    }
    &#comfort {
      font-family: "Lexend Tera", sans-serif;
      grid-area: 3/4/4/5;
    }
  }
}

@media screen and (max-width: 769px) {
  .hero {
    background-size: auto 100%;
    background-position: center center;
    grid-template-rows: 75px 75px 75px;
    grid-template-columns: 25px 75px 10px 1fr;
    div {
      font-size: 3rem;
      &#design {
        font-size: 8rem;
      }
    }
  }
}

@media screen and (max-width: 440px) {
  .hero {
    grid-template-columns: 25px 25px 20px 1fr;
    div {
      font-size: 3rem;
      &#design {
        font-size: 8rem;
      }
    }
  }
}
</style>