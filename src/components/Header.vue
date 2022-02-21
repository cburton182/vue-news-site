<template>
  <header>
    <Navbar @reveal-form="$emit('reveal-form')" :title="title" />
  </header>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "Header",
  props: {
    title: String,
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
header {
  z-index: 3;
  position: sticky;
  top: 0;
  border-bottom: none;
}
</style>
