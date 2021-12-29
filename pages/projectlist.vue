<template>
  <div>
    <main class="container">
      <!-- Show an error message if the REST API doesn't work -->
      <div class="error" v-if="errors">
        Sorry! It seems we can't fetch data from GitHub right now.
      </div>
      <!-- Otherwise show a section for our portfolio projects and skills section-->
      <section id="portfolio" v-else>
        <!-- loading message -->
        <div class="loading" v-if="loading">
          Loading projects & skills from GitHub ...
        </div>

        <!-- show the projects -->
        <div class="projects" v-else>
          <div
            v-for="project in projectsList"
            v-bind:key="project"
            class="card__custom"
          >
            <div class="card__custom__text">
              <div>
                <h3>{{ trimTitle(project.name) }}</h3>
                <p>{{ trimText(project.description) }}</p>
              </div>

              <div class="meta__data d_flex">
                <div class="date">
                  <h5>Updated at</h5>
                  <div>{{ new Date(project.updated_at).toDateString() }}</div>
                </div>
                <img class="avatar" :src="project.owner.avatar_url" />
              </div>
            </div>

            <div class="card__custom__img"></div>
            <div class="card__custom__button">
              <a :href="project.html_url" target="_blank"> Code </a>
            </div>
          </div>

          <div v-if="!loading" style="text-align: center; width: 100%">
            <div v-if="projectsList.length < projects.length">
              <button class="btn_load_more" v-on:click="loadMore()">
                Load More
              </button>
            </div>
            <div v-else>
              <a :href="gitHubLink" target="_blank">Visit My GitHub</a>
            </div>
          </div>

          <div id="skills_section">
            <h2>Skills</h2>
            <ul class="skills">
              <li v-for="skill in skills" v-bind:key="skill">{{ skill }}</li>
              <li>Git</li>
              <li>T-SQL</li>
              <li>Scrum</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      projects: [],
      projectsList: null,
      skills: [],
      projectsCount: 5,
      perPage: 20,
      page: 1,
      loading: true,
      errors: false,
      gitHubLink: "https://github.com/andreaslind31",
    };
  },
  methods: {
    async fetchData() {
      await this.$axios
        .$get(
          `https://api.github.com/users/andreaslind31/repos?per_page=${this.perPage}&page=${this.page}`
        )
        .then((response) => {
          console.log(response);
          this.data = response.data;
          let temp = this;
          this.data.forEach((data) => {
            if (
              data.language !== null &&
              !this.skills.includes(data.language)
            ) {
              this.skills.push(data.language);
            }
          });
          temp.projects = temp.data;
        })
        .catch((error) => {
          console.log(error);
          this.errors = true;
        })
        .finally(() => {
          this.loading = false;
          this.getProjects();
        });
    },
    getProjects() {
      console.log(this.projects);
      this.projectsList = this.projects.slice(0, this.projectsCount);
      return this.projectsList;
    },
    loadMore() {
      if (this.projectsList.length <= this.projects.length) {
        this.projectsCount += 5;
        this.getProjects();
      }
    },
    trimTitle(text) {
      const title = text.replaceAll("-", " ").replaceAll("_", " ");
      if (title.length > 15) {
        return title.slice(0, 12) + " ...";
      }
      return title;
    },
    trimText(text) {
      if (text === null) {
        return "This project has no description yet!";
      } else if (text.length > 100) {
        return text.slice(0, 100) + " ...";
      }
      return text;
    },
  },
  mounted() {
    setTimeout(this.fetchData, 2000);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  color: white;
  /* background: linear-gradient(116.82deg, #3D5467 0%, #1A232B 99.99%, #333333 100%); */
  background: linear-gradient(117deg, #3a4856 0%, #1c3a4f 99.99%, #443522 100%);
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #db5461;
}
.d_none {
  display: none;
}
.d_flex {
  display: flex;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.loading {
  font-size: 2rem;
}
.p_2 {
  padding: 0.5rem;
}

.bio__media {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
}
.bio__media img {
  height: 120px;
}
.bio__media__text {
  padding: 1rem;
}
.bio__media__text h1 {
  font-size: 36px;
  font-weight: 900;
  color: #db5461;
}
.bio__media__text p {
  font-weight: 100;
  font-size: 16px;
  line-height: 1.5rem;
}
.card__custom {
  position: relative;
  display: flex;
  max-width: 400px;
  height: 300px;
  min-height: 300px;
  padding: 0.5rem;
  margin-bottom: 3rem;
  flex-grow: 1;
  flex-basis: calc(100% / 2);
  align-items: center;
  justify-content: space-between;
}
.card__custom > .card__custom__text {
  max-width: calc((100% / 3) * 2);
  text-align: right;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
}
.card__custom__img {
  position: absolute;
  width: 70%;
  height: 100%;
  background-image: url(/img/cards_bg_img.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  z-index: -1;
  left: 60%;
  transform: translateX(-50%);
  border-radius: 85px 0 100px 25px;
}
.card__custom__button a,
.btn_load_more {
  background: #f1edee;
  border: 5px solid #3d5467;
  box-sizing: border-box;
  border-radius: 54px;
  padding: 0.5rem 1rem;
  font-weight: 900;
  color: #3d5467;
}
.card__custom__button a:hover,
.btn_load_more:hover {
  cursor: pointer;
  background: #324555;
  color: white;
  border-color: #db5461;
  transition: 1s;
}
.card__custom__text h3 {
  text-transform: uppercase;
  font-size: 1.5rem;
}

#static {
  margin-top: 4rem;
}
.grid__static {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}
.card__static {
  position: relative;
  display: flex;
  max-width: 450px;
  height: 350px;
  min-height: 350px;
  padding: 0.5rem;
  margin-bottom: 3rem;
  flex-grow: 1;
  flex-basis: calc(100% / 2);
  align-items: center;
  justify-content: space-between;
}
.card__static > .card__static__text {
  max-width: calc((100% / 3) * 2);
  text-align: right;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
}
.card__static__img {
  position: absolute;
  width: 70%;
  height: 100%;
  background-image: url(/img/cards_static_img.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  z-index: -1;
  left: 60%;
  transform: translateX(-50%);
  border-radius: 85px 0 100px 25px;
}
.card__static__button a {
  background: #f1edee;
  border: 5px solid #3d5467;
  box-sizing: border-box;
  border-radius: 54px;
  padding: 0.5rem 1rem;
  font-weight: 900;
  color: #3d5467;
}
.card__static__button a:hover {
  cursor: pointer;
  background: #324555;
  color: white;
  border-color: #db5461;
  transition: 1s;
}
.card__static__text h3 {
  text-transform: uppercase;
  font-size: 1.5rem;
}

main#home {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#home > .about__me {
  text-align: center;
  width: 80%;
  line-height: 1.5rem;
}
#home > .about__me > h1 {
  margin: 20px 0 0;
  font-size: 36px;
  font-weight: 900;
  color: #db5461;
}
#home > .about__me > h3 {
  font-size: 28px;
  font-weight: 500;
}
#home > .about__me > h1,
#home > .about__me > h3 {
  font-style: normal;
  line-height: 42px;
  letter-spacing: 0.115em;
}
#home > .about__me p {
  font-weight: 100;
  font-size: 22px;
  padding: 2rem;
}
.skills_projects_link {
  position: relative;
}
.skills_projects_link > a {
  text-transform: uppercase;
  color: white;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
}
.skills_projects_link > a:hover {
  color: #db5461;
  transition: all 0.5s ease-in-out;
}
.skills_projects_link > a:hover::after {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin: auto;
  text-align: center;
  content: "";
  width: 160px;
  height: 2px;
  background-color: #db5461;
  transition: background-color 0.5s ease-in-out;
}
.contact_link {
  position: relative;
}
.contact_link > a {
  text-transform: uppercase;
  color: white;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
}
.contact_link > a:hover {
  color: #db5461;
  transition: all 0.5s ease-in-out;
}
.contact_link > a:hover::after {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin: auto;
  text-align: center;
  content: "";
  width: 160px;
  height: 2px;
  background-color: #db5461;
  transition: background-color 0.5s ease-in-out;
}

#site_header {
  text-align: center;
  padding: 2rem 0;
  justify-content: space-between;
  align-items: center;
}
#site_header > h1 {
  text-transform: uppercase;
}
nav a {
  color: #e2e2e2;
  text-transform: uppercase;
  font-weight: 900;
}
nav a:hover {
  color: #db5461;
}

#portfolio {
  margin-top: 4rem;
}
#portfolio .projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

#skills_section {
  margin-top: 4rem;
  min-height: 300px;
  background-image: url(/img/skills_bg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
}
#skills_section h2 {
  margin-left: 160px;
  font-size: 44px;
  color: #f1edee;
  line-height: 2rem;
}
#skills_section ul {
  list-style: none;
  margin: 20px 120px;
  display: flex;
  flex-wrap: wrap;
}
#skills_section ul li {
  padding: 1rem;
  margin: 0.5rem;
  background-color: #db5461;
  border: 5px solid #3d5467;
  border-radius: 35px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 1rem;
}
.card__back {
  display: none;
}
.rotate__card {
  transform: rotate3d(360, 0, 0, 180deg);
}

footer {
  text-align: center;
  padding: 2rem 0;
}

@media screen and (max-width: 475px) {
  .card {
    flex-basis: 100%;
    width: 100%;
  }
  #skills_section {
    background-size: 30%;
  }
}
</style>