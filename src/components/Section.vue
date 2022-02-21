<template>
  <!-- colors for each section styled dynamically; defined in Home.vue -->
  <!-- Card receive data the same as CardFrontPage component; differences are in styling -->
  <section :style="{ color: color }">
    <div class="section-title">
      <h2 class="title">{{ category }}</h2>
      <div class="dot-line"></div>
    </div>
    <div class="grid--section">
      <CardSection
        v-for="story in storiesData"
        :key="story.id"
        :category="story.category"
        :headline="story.title"
        :img="story.urlToImage"
      />
    </div>
  </section>
</template>

<script>
import CardSection from "./CardSection.vue";
export default {
  name: "Section",
  props: {
    color: String,
    storiesData: Array,
    category: String,
  },
  components: {
    CardSection,
  },
};
</script>

<style scoped>
.grid--section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.7rem;
  grid-template-areas: "one two three four";
}

/*------------------ SECTION TITLE ------------ */
.section-title {
  display: flex;
  grid-area: title;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 0;
}
.section-title .title {
  font-size: 2rem;
  text-transform: uppercase;
}
.section-title .dot-line {
  display: inline-block;
  flex: 1;
  height: 1px;
  background-image: linear-gradient(
    to right,
    currentColor 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-size: 4px 1px;
  vertical-align: middle;
}
</style>
