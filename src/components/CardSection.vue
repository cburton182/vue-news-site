<template>
  <router-link to="/articles" class="card">
    <div class="img-container" href="#">
      <img :src="img" alt="change this" class="story-img" />
    </div>
    <div class="content">
      <h2 class="headline">
        {{ headline }}
      </h2>
      <h4 style="position: absolute" class="category">{{ category }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Card",
  props: {
    category: String,
    headline: String,
    img: String,
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.img-container {
  position: relative;
  display: block;
  padding-top: 88.5%;
  flex: 0 0 auto;
  overflow: hidden;
}
.img-container .story-img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.content {
  position: relative;
  min-height: 10rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  background: #f5f5f5;
}
.headline {
  font-size: 1.8rem;
}
.category {
  position: absolute;
  bottom: 3px;
  right: 3px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: rgb(4, 4, 134);
  text-align: end;
  padding-right: 5%;
}
</style>
