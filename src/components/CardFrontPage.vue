<template>
  <!-- cards are resuable and filled dynamically with data passed down from top level using props -->
  <router-link to="/articles" class="dark-filter card">
    <img :src="img" alt="test" class="story-img" />
    <div class="content">
      <h2 class="headline">{{ headline }}</h2>
      <h4 class="category">{{ category }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "CardFrontPage",
  data() {
    return {
      //
    };
  },
  components: {},
  props: {
    category: String,
    headline: String,
    img: String,
  },
};
</script>

<style scoped>
/* These styles only apply to Front Page Cards, not Section Cards */
.dark-filter::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.5));
}
.dark-filter:hover::after {
  background-image: none;
}

.card[class*="lg"] .content > .headline {
  font-size: 3rem;
}
/* content on front page cards style differently than cards in other sections */
.card .content {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.card .content::after {
  content: "";
  position: absolute;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateY(100%);
  transition: transform 0.2s ease-in-out;
}
.card:hover > .content::after {
  transform: translateY(0);
}
</style>
