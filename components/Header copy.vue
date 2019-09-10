<template>
  <div>
    <div class="hero container">
      <span id="design">Design</span>
      <span id="unique">Unique</span>
      <span id="sober">Sober</span>
      <span id="comfort" class="has-font-light">Comfort</span>
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
  position: relative;
  background: url("/pictures/hero-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 2rem;
  span {
    position: relative;
    display: block;
    font-size: 4rem;
    &#design {
      position: absolute;
      bottom: 0;
      font-size: 10rem;
      color: #9c9898;
      font-family: "Parisienne", cursive;
    }
    &#unique {
      margin-left: 10rem;
      font-family: "Montserrat", sans-serif;
    }
    &#sober {
      margin-left: 5rem;
      font-family: "Open Sans Condensed", sans-serif;
    }
    &#comfort {
      margin-left: 13rem;
      font-family: "Lexend Tera", sans-serif;
    }
  }
}

@media screen and (max-width: 769px) {
  .hero {
    padding-bottom: 150px;
    background-size: 100%;
    background-position: center bottom;
    span {
      font-size: 2rem;
      &#design {
        font-size: 8rem;
        top: 0;
      }
      &#unique {
        margin-left: 5rem;
      }
      &#sober {
        margin-left: 2rem;
      }
      &#comfort {
        margin-left: 7rem;
      }
    }
  }
}
</style>