<template>
  <footer class="footer">
    <div class="level has-text-centered has-text-white-ter">
      <div class="level-item">
        <div>
          <ul class="is-size-4 social">
            <p class="heading">Social links</p>
            <li>
              <a href="#">
                <span class="icon has-text-primary">
                  <span class="fab fa-twitter"></span>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon has-text-primary">
                  <span class="fab fa-instagram"></span>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon has-text-primary">
                  <span class="fab fa-facebook"></span>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon has-text-primary">
                  <span class="fab fa-pinterest"></span>
                </span>
              </a>
            </li>
          </ul>
          <p class="is-size-6">Be the first to hear about sales and new collections</p>

          <ul class="other">
            <p class="heading">Other links</p>
            <li>
              <a href="#" class="has-text-primary">Contact</a>
            </li>
            <li>
              <a href="#" class="has-text-primary">About us</a>
            </li>
            <li>
              <a href="#" class="has-text-primary">Terms</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="level-item">
        <div>
          <p class="heading">Newsletter</p>
          <form @submit.prevent="register">
            <div class="field has-addons has-addons-right">
              <p class="control">
                <input class="input" type="text" placeholder="Your email" v-model="email" />
              </p>
              <p class="control">
                <input type="submit" class="button is-primary" value="Register" />
              </p>
            </div>
          </form>
          <p>
            Sample website made by
            <a
              class="has-text-primary"
              href="https://pedraal.dev"
              target="_blank"
            >Pierre GOLFIER</a>
            <br />Made using
            <a href="https://nuxtjs.org/" target="_blank" class="has-text-success">Nuxt</a> and
            <a href="https://www.netlify.com/" target="_blank" class="has-text-info">Netlify</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.level-item {
  .social {
    li {
      display: inline-block;
    }
  }
  .other {
    margin: 40px 0;
  }
  form {
    margin-bottom: 60px;
  }
  .heading {
    margin-bottom: 20px;
  }
}
</style>