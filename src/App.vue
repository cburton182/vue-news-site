<template>
  <!-- custom events emitted from Navbar and SignUpForm, handled by methods here at top level -->
  <Header @reveal-form="revealModal" title="WorldVue News" />
  <router-view></router-view>
  <Footer />
  <!-- SignUp form is a resuable component, where all data is dynamically rendered -->
  <!-- boolean determines if SignUp modal will be displayed or not -->
  <!-- todo: consume form information -->
  <SignUpForm
    v-if="revealForm"
    :formData="newsletter"
    @close-modal="closeModal"
  />
</template>
<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import SignUpForm from "./components/SignUpForm.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    SignUpForm,
  },
  data() {
    return {
      revealForm: false,
      newsletter: {
        header: "Sign up for our newsletter",
        msg: "We'll keep you current on your favorite topics",
        btnText: "Sign Up",
      },
    };
  },
  methods: {
    revealModal() {
      this.revealForm = true;
    },
    closeModal() {
      this.revealForm = false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

:root {
  /* Color Palette */
  --black: #000000ff;
  --black2: #0c1821ff;
  --oxford-blue: #1b2a41ff;
  --charcoal: #324a5fff;
  --lavender-gray: #ccc9dcff;
  --light-gray: rgb(231, 229, 238);
  --vue-green: #42b983;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  /* 1 rem == 10px; */
  scroll-behavior: smooth;
}

#app {
  /* inherited properties */
  position: relative;
  font-family: sans-serif;
  height: 280vh;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--oxford-blue);
}

::selection {
  background-color: var(--oxford-blue);
  color: white;
}
a {
  font-family: inherit;
  text-decoration: none;
  color: currentColor;
}
.btn {
  display: inline-block;
  background: #000;
  color: white;
  border: none;
  padding: 1rem 2rem;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:hover {
  transform: scale(1.02);
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.modal {
  position: fixed;
  z-index: 3;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2);
}
</style>
