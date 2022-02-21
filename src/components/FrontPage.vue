<template>
  <section class="grid--fp">
    <!-- filling card with data sent in from Home.vue -->
    <!-- Grid item placement determined by index of iterable -->
    <CardFrontPage
      v-for="(story, index) in storiesData"
      :key="story.id"
      :class="gridAreas[index]"
      :category="story.category"
      :headline="story.title"
      :img="story.urlToImage"
    />
  </section>
</template>

<script>
import CardFrontPage from "./CardFrontPage.vue";
export default {
  name: "FrontPage",
  data() {
    return {
      gridAreas: [
        "fp-item--lg-main",
        "fp-item--lg-one",
        "fp-item--lg-two",
        "fp-item--sm-one",
        "fp-item--sm-two",
      ],
    };
  },
  components: {
    CardFrontPage,
  },
  props: {
    storiesData: Array,
  },
};
</script>

<style scoped>
/* All styles here are concerning grid layout */
.grid--fp {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 2rem;
  height: 95vh;
  /* Main: 2, feature */
  grid-template-areas:
    "main main sm-1 sm-2"
    "main main sm-1 sm-2"
    "main main lg-1 lg-1"
    "lg-2 lg-2 lg-1 lg-1"
    "lg-2 lg-2 lg-1 lg-1";
  color: white;
}
.fp-item--lg-main {
  background: black;
  grid-area: main;
}
.fp-item--lg-one {
  background: pink;
  grid-area: lg-1;
}
.fp-item--lg-two {
  background: blue;
  grid-area: lg-2;
}
.fp-item--sm-one {
  background: red;
  grid-area: sm-1;
}
.fp-item--sm-two {
  background: lightgreen;
  grid-area: sm-2;
}
</style>
