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
        </div>
        <div class="row">
            <div class="col-xs-12 part">
                <Footer @openConsentBanner="openConsentBanner()"></Footer>
            </div>
        </div>
        <cookie-law theme="custom" @accept="enableCookies" @decline="disableCookies" ref="cookie">
            <div slot-scope="props">
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <p class="mobile-text">We use cookies to analyze website traffic. By clicking "Accept" you
                            consent to our <a href="/cookies" target="_blank">Cookie Policy</a>.</p>
                        <p class="text">We use cookies to analyze website traffic. By clicking "Accept" you consent to
                            our <a href="/cookies" target="_blank">Cookie Policy</a>. You can change your preferences at
                            any time by clicking "Cookie Preferences" in the footer.</p>
                    </div>
                    <div class="col-sm-12 col-xs-12">
                        <div class="row" id="consent-button-row">
                            <div class="col-xs-6">
                                <button class="skew button" @click="props.accept">Accept</button>
                            </div>
                            <div class="col-xs-6">
                                <button class="skew button" @click="props.decline">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </cookie-law>
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
    name: 'Home',
    components: {Footer, Contact, Personality, About, Header, Skills},
    methods: {
        enableCookies() {
            this.$ga.enable();
        },
        disableCookies() {
            this.$ga.disable();
        },
        openConsentBanner() {
            this.$refs.cookie.isOpen = true;
        },
    }
};
</script>

<style scoped>

.header {
    height: 100vh;
	width: 100%;
	overflow-x: hidden;
}

.button {
    font-size: .8vw;
    -webkit-appearance: button;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    box-sizing: border-box;
    margin: 0;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    background-color: var(--second-bg);
    color: var(--black-bg);
    border: none;
    border-radius: 2px;
    margin-top: 2vh;
    text-decoration: none;
}

.button:hover {
    background-color: var(--text-light);
    cursor: pointer;
}

/* Cookie Law Custom Theme */
.Cookie--custom {
    max-width: 35vw;
    background-color: #1a222b;
    margin: 30px;
    margin-bottom: 5vh;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 35px;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, .25);
    color: var(--text-light);
    font-family: 'Roboto', 'Jost', sans-serif;
    line-height: 1.5;
    letter-spacing: 1px;
    left: auto !important;
}

.Cookie--custom .mobile-text {
    display: none;
}

.Cookie--custom a {
    color: var(--scroll-bar);
}

.Cookie--custom a:hover {
    color: var(--linkedin);
}

#consent-button-row {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (max-width: 950px) {
    .Cookie--custom {
        margin-bottom: 7vh;
        height: fit-content;
        padding-top: 10px;
        padding-bottom: 10px;
    }
}

@media screen and (max-width: 700px) {
    .Cookie--custom {
        max-width: 100vw;
        border-radius: 0;
        margin-left: auto;
        margin-right: auto;
    }

    .Cookie--custom:first-child {
        margin: 0 !important;
    }

    .button {
        font-size: 4vw !important;
        margin-bottom: 2vh;
    }
}

</style>
