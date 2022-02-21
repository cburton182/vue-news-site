<template>
  <footer>
    <p>Copyright &copy; WorldVue 2022</p>
    <router-link to="/articles">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>

<style scoped>
a {
  color: #333;
  margin-top: 30px;
  text-align: center;
}
footer {
  text-align: center;
}
</style>
