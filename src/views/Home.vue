<template>
  <main>
    <!-- :storiesData contains needed information to construct a Card, will be pased down from top level -->
    <FrontPage :storiesData="frontPageArticles" />
    <Section
      :color="sectionColors[0]"
      category="Tech"
      :storiesData="techArticles"
    />
    <Section
      :color="sectionColors[1]"
      category="Sports"
      :storiesData="sportsArticles"
    />
  </main>
</template>

<script>
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";
export default {
  name: "Home",
  components: {
    FrontPage,
    Section,
  },
  data() {
    return {
      sectionColors: ["#048ba8", "#43369B"],
      frontPageArticles: [],
      techArticles: [],
      sportsArticles: [],
    };
  },
  methods: {
    fillArrays(arr1, arr2) {
      // this is where you could configure page to present more articles per section.
      console.log("splicing arrays now");
      // this.frontPageArticles = [...arr1.splice(0, 3), ...arr2.splice(0, 3)];
      this.techArticles = arr1.splice(0, 4);
      this.sportsArticles = arr2.splice(0, 4);
      this.frontPageArticles = [...arr1.splice(0, 3), ...arr2.splice(0, 2)];
    },
    addProperties(arr, str) {
      // adds id and category to each story, also filters out responses that had no image url.
      const newArr = arr
        .map((article) => {
          article.id = Math.floor(Math.random() * 100000);
          article.category = str;
          return article;
        })
        .filter((article) => article.urlToImage);
      return newArr;
    },
    async fetchTechArticles() {
      // fetches new stories from API
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0a866f308af5418e9a0aa2c879e9dd2b`
      );
      const data = await res.json();
      console.log(data.articles, "Tech");
      // adds id and category data to be used when building cards
      return this.addProperties(data.articles, "Tech");
    },
    async fetchSportsArticles() {
      // todo: merge this function with the one above to maintain dry code.
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=0a866f308af5418e9a0aa2c879e9dd2b`
      );
      const data = await res.json();
      return this.addProperties(data.articles, "Sports");
    },
  },
  async created() {
    // fetches stories, checks for bad img urls, adds id and categories
    const techArr = await this.fetchTechArticles();
    const sportsArr = await this.fetchSportsArticles();
    // fills frontPage, Tech, and Sports arrays with stories to be used by other components.
    this.fillArrays(techArr, sportsArr);
  },
};
</script>

<style>
/* contains styles used globally on home page, see component to see styles specific to that component
 */
:root {
  --section-1-color: #048ba8;
  --section-2color: var(--oxford-blue);
}

main {
  margin: 0 auto;
  padding: 2rem;
  z-index: 2;
  position: relative;
}
/* Styles for every Card component, regardless of which section they are placed */
.card {
  position: relative;
  overflow: hidden;
  color: inherit;
}
.card .story-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.15s ease-in-out;
}
.card:hover .story-img {
  transform: scale(1.02);
}
.card .content > * {
  position: relative;
  z-index: 10;
  padding: 0 5%;
}

.card .content > .headline {
  /* font-size: 3rem; */
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 2%;
  font-size: 1.8rem;
}
.card .content > .category {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing: 1px;
  margin-bottom: 2%;
}
</style>
