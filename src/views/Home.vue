<template>
    <main>
        <div class="header">
            <svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#BAE6FF"
                      d="M36.2,-57.6C49.7,-54.8,65.5,-50.9,68.5,-41.1C71.6,-31.3,62,-15.6,61,-0.6C59.9,14.4,67.3,28.8,63.4,37.1C59.4,45.4,44.1,47.6,31.7,50.8C19.2,54,9.6,58.1,-3.3,63.8C-16.1,69.4,-32.3,76.6,-40.4,71C-48.6,65.3,-48.9,46.8,-52.9,32.9C-56.9,18.9,-64.7,9.4,-70.5,-3.3C-76.3,-16.1,-80,-32.2,-73.4,-41.7C-66.7,-51.1,-49.7,-53.8,-35.7,-56.3C-21.8,-58.8,-10.9,-61,0.2,-61.4C11.3,-61.8,22.6,-60.3,36.2,-57.6Z"
                      transform="translate(100 100)"/>
            </svg>
            <Header/>
        </div>
        <div class="content">
            <About/>
            <Personality/>
            <Skills/>
            <Contact/>
            <Footer/>
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

export default {
    components: {Footer, Contact, Personality, About, Header, Skills},
};
</script>

<style scoped>
.blob {
    margin-top: -8rem;
    width: 100%;
}

.header {
    height: 100vh;
}

.content {
    height: 100vh;
}

</style>
