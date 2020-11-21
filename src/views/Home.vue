<template>
    <main>
        <div class="header">
            <Header/>
        </div>
        <div class="content">
            <About/>
            <Personality/>
            <Skills/>
            <Contact/>
            <Footer/>
            <cookie-law v-on:accept="cookiesAccepted()" theme="blood-orange"/>
        </div>
    </main>
</template>

<script>
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import About from "@/components/About";
import Personality from "@/components/Personality";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieLaw from 'vue-cookie-law'


export default {
    name: 'Home',
    components: {Footer, Contact, Personality, About, Header, Skills, CookieLaw},
    methods: {
        cookiesAccepted() {
            console.table('Activate GA')
        }
    }
};
</script>

<style scoped>

.header {
    height: 100vh;
}

.content {
    height: 100vh;
}

</style>
