<template>
  <b-container style="height: 100vh">
    <b-row>
      <b-col>
        <p>Find me on:</p>
      </b-col>
    </b-row>
    <b-row class="mb-4 pt-2">
      <b-col>
        <a href="https://www.linkedin.com/in/christianvilen/" target="_blank"
        >
          <img
              src="../assets/LI-In-Bug.png"
              alt="linkedin logo"
              class="social-logo"
          >
        </a>

        <a href="https://www.instagram.com/crdvilen/" target="_blank"
        >
          <img
              src="../assets/insta-logo.png"
              alt="instagram logo"
              class="social-logo"
          >
        </a>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>
          Or contact me via this email form:
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ContactForm/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ContactForm from "@/components/ContactForm";

export default {
  name: "Contact",
  components: {ContactForm},
}
</script>

<style scoped>
.social-logo {
  width: 4rem;
  height: auto;
  padding: 10px;
}
</style>