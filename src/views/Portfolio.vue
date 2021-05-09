<template>
  <main>
    <b-row>
      <b-col cols="6" sm="4" v-for="(project, i) in projects" :key="i">
        <b-card class="mb-4 shadow card">
          <b-card-title class="card-title" v-text="project.name"></b-card-title>
          <b-card-sub-title v-text="project.language"></b-card-sub-title>
          <b-card-text
            class="body-text"
            v-text="project.description"
          ></b-card-text>
          <b-row>
            <b-col>
              <b-link
                class="body-text"
                v-b-tooltip.hover.bottom
                title="Opens to Github.com"
                target="_blank"
                :href="project.html_url"
                >View
              </b-link>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-2 mb-2" v-if="projects.length > 0">
      <b-col>
        <b-link href="https://github.com/ChristianVilen"
          >/ChristianVilen</b-link
        >
      </b-col>
    </b-row>
    <b-row v-if="projects.length > 0">
      <b-col>
        <img
          class="octocat-img"
          src="../assets/Octocat.png"
          alt="Github Octocat"
        />
      </b-col>
    </b-row>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "Portfolio",
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.getRepos();
  },
  methods: {
    getRepos() {
      axios
        .get("https://api.github.com/users/ChristianVilen/repos")
        .then((r) => {
          this.sortRepos(r.data);
        })
        .catch((e) => console.log(e));
    },
    sortRepos(data) {
      data.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
      this.projects = data
    },
  },
};
</script>

<style scoped>
.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.octocat-img {
  width: 200px;
  height: auto;
}

.body-text {
  min-height: 6rem;
  max-height: 6rem;
  overflow: auto;
}
</style>
