<template>
  <nav class="navbar">
    <a target="_blank" href="http://github.com/cburton182">
      <img src="../assets/github.svg" alt="GitHub link" />
    </a>
    <!-- navbar logo returns user to home page -->
    <router-link class="logo-lg" to="/">{{ title }}</router-link>
    <!-- passing custom event to top level -->
    <button @click="$emit('reveal-form')">Sign Up</button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      // was going to be used for a navbar animation when page changed, not finished.
      topPage: true,
    };
  },
  props: {
    title: String,
  },
  computed: {
    // part of animation for page change, not used at the moment
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else return false;
    },
  },
};
</script>

<style scoped>
img {
  width: 3.5rem;
  height: 3.5rem;
}
a[target="_blank"]:hover {
  transform: scale(1.03);
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  border-bottom: 1px solid blue;
  background: white;
  padding: 0 15%;
}

.home-link {
  font-size: 5.5rem;
}

.logo-lg {
  position: relative;
  margin: 1.4rem 0;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: lowercase;
  transition: transform 1s ease;
}

button {
  border: none;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
}
button:hover {
  color: var(--vue-green);
}

/* unused logic for animation: revisit */

/* content received from the top level from prop and stored in :attr-data in the template */
/* [data-title]::after {
  content: attr(data-title);
  position: absolute;
  width: max-content;
  top: 200%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: lowercase;
} */

/* class is applied as result of toggleSlide() method; the after element is abs positioned and will slide as well */
/* .slide-up {
  animation: slide-in 2s linear forwards;
} */

/* @keyframes jump-lowercase {
  0% {
    transform: translateY(0);
    color: black;
  }
  50% {
    transform: translateY(-200%);
    color: blue;
  }
  100% {
    transform: translateY(0);
    color: blue;
  }
} */
</style>
