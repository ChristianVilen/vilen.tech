<template>
    <div id="skills" data-aos="zoom-in" data-aos-duration="1000" class="row card-container">
        <div data-aos="flip-up" data-aos-delay="300" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Frontend"
                :body="body.frontendData"
                :svg="frontEnd"
            />
        </div>
        <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Backend"
                :body="body.backendData"
                :svg="backEnd"
            />
        </div>
        <div data-aos="flip-up" data-aos-delay="100" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Digital Marketing"
                :body="body.digitalMarketingData"
                :svg="digitalMarketing"
            />
        </div>
        <div data-aos="flip-up" data-aos-delay="700" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Cloud"
                :body="body.cloudData"
                :svg="cloud"
            />
        </div>
        <div data-aos="flip-up" data-aos-delay="600" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Devops"
                :body="body.devopsData"
                :svg="devops"
            />
        </div>
        <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Agile Development"
                :body="body.agileData"
                :svg="agile"
            />
        </div>
        <div data-aos="flip-up" data-aos-delay="500" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Soft Skills"
                :body="body.softSkills"
                :svg="softSkillsIcon"
            />
        </div>
        <div data-aos="flip-up" data-aos-delay="900" data-aos-duration="200"
             class="card-container-inner col-xs-6 col-md-6 col-lg-3">
            <Card
                class="card"
                title="Miscellaneous"
                :body="body.miscellaneousData"
                :svg="miscellaneous"
            />
        </div>
    </div>
</template>


<script>
import Card from "@/components/Cards";

export default {
    name: 'Skills',
    components: {Card},
    data() {
        return {
            body: {
                frontendData: ["Vue", "React", "PHP", "HTML5", "Bulma", "Bootstrap", "Robot Framework"],
                softSkills: ["Management", "Communication", "Customer service", "Time Management"],
                cloudData: ["AWS Certified", "CloudOps", "Linux", "Shell Scripting", "Python, PHP, Bash"],
                digitalMarketingData: ["SEO & SEM", "UI/UX Design", "Performance Marketing", "Recruitment Marketing", "Inbound Marketing"],
                backendData: ["Docker, -compose & -swarm", "Vagrant", "Python", "PHP", "PHPUnit", "Shell Scripting", "Bash"],
                devopsData: ["Linux/Unix", "CI/CD", "Jenkins", "Git", "Nano & Vim", "Nginx & Apache"],
                agileData: ["Scrum", "Extreme Programming", "Self Organizing", "Customer Collaboration"],
                miscellaneousData: ["Photoshop", "Figma", "Logistics", "Languages:", "Finnish, English & Russian"],
            },
            digitalMarketing: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-subtract" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>\n' +
                '</svg>',
            agile: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>\n' +
                '  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>\n' +
                '</svg>',
            frontEnd: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-display" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z"/>\n' +
                '  <path fill-rule="evenodd" d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>\n' +
                '</svg>',
            devops: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-server" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path fill-rule="evenodd" d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4C14.665 5.474 11.68 6.667 8 6.667 4.318 6.667 1.333 5.473 1.333 4V2.667zm0 3.667v3C1.333 10.805 4.318 12 8 12c3.68 0 6.665-1.193 6.667-2.665V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 0 1-1.457-.79zm13.334 5.334c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 0 1-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>\n' +
                '</svg>',
            cloud: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cloud" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>\n' +
                '</svg>',
            miscellaneous: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-shuffle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>\n' +
                '  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>\n' +
                '</svg>',
            backEnd: '<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-code" fill="currentColor" xmlns="http://www.w3.org/2000/svg">\n' +
                '  <path fill-rule="evenodd" d="M5.854 4.146a.5.5 0 0 1 0 .708L2.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm4.292 0a.5.5 0 0 0 0 .708L13.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>\n' +
                '</svg>',
            softSkillsIcon: '<svg id="Layer_1" enable-background="new 0 0 511.96 511.96" height="2em" viewBox="0 0 511.96 511.96" width="2em" xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1188_"><g id="XMLID_395_"><g id="XMLID_36_"><path id="XMLID_38_" d="m90.41 313.483c-.414 0 .422.053 0 0z"/><path id="XMLID_39_" d="m492.528 452.001c-34.678 0-68.873-3.851-102.053-11.246 4.455-12.393 6.847-25.614 6.981-39.207.307-31.045-11.224-60.017-32.468-81.579-14.096-14.307-31.706-24.722-50.925-30.118-.167-.047-.333-.089-.501-.127-48.523-13.576-92.385-37.347-130.368-70.659-4.153-3.642-10.47-3.228-14.112.924-3.641 4.152-3.228 10.471.925 14.112 13.841 12.138 28.419 23.081 43.681 32.8 9.04 17.47 13.501 37.038 12.906 56.809-.166 5.521 4.175 10.13 9.695 10.296.102.003.204.004.306.004 5.384 0 9.827-4.282 9.99-9.7.424-14.085-1.352-28.083-5.181-41.499 16.489 8.492 33.667 15.676 51.479 21.52 10.281 16.672 16.195 35.663 17.133 55.15.257 5.353 4.678 9.519 9.98 9.519.162 0 .326-.004.489-.012 5.516-.266 9.773-4.953 9.507-10.469-.755-15.691-4.271-31.099-10.287-45.543 11.562 4.863 22.143 12.004 31.035 21.029 26.915 27.317 33.6 67.637 20.248 101.969-105.986-28.425-200.206-93.491-264.417-185.688-3.157-4.532-9.388-5.646-13.921-2.491-4.532 3.156-5.647 9.389-2.491 13.921 44.26 63.551 103.696 116.388 171.881 152.798 31.577 16.861 65.021 30.146 99.55 39.686-3.397 5.159-7.322 10.069-11.794 14.635-20.915 19.974-52.305 27.937-80.02 20.287-32.575-8.99-63.558-23.067-91.793-41.539 9.23-.922 18.379-2.788 27.387-5.642 5.265-1.667 8.181-7.288 6.514-12.553-1.668-5.264-7.285-8.179-12.553-6.514-15.964 5.057-32.438 6.555-49.01 4.475-8.634-7.032-16.934-14.51-24.845-22.421-29.235-29.235-51.981-63.156-67.965-99.648 10.306 4.022 21.717 6.799 32.898 8.199 4.968 0 9.904-3.661 10.537-8.719.687-5.48-3.199-10.479-8.68-11.165-16.211-2.031-31.447-7.341-45.352-15.787-25.474-75.975-23.051-160.33 9.755-235.768 9.607 44.114 27.614 86.349 52.852 123.601 3.098 4.571 9.314 5.768 13.888 2.67 4.572-3.098 5.768-9.315 2.67-13.888-29.302-43.25-48.273-93.626-54.859-145.677-.543-4.295-3.789-7.753-8.042-8.566-4.251-.816-8.545 1.201-10.636 4.993-18.01 32.655-30.573 67.879-37.342 104.691-6.67 36.275-7.56 73.213-2.646 109.789 10.219 76.058 44.377 145.017 98.78 199.421 42.531 42.531 95.48 73.42 153.122 89.33 8.678 2.395 17.644 3.557 26.619 3.557 26.517 0 53.095-10.146 72.445-28.578.112-.103.228-.195.338-.303.097-.095.177-.196.269-.293 6.948-7.101 12.885-14.976 17.744-23.435 36.169 8.358 73.342 12.651 110.658 12.651 5.523 0 10-4.477 10-10s-4.478-10.002-10.001-10.002z"/></g><path id="XMLID_397_" d="m145.414 205.561c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.07-1.07-5.21-2.93-7.07-4.44-2.93-7.07-2.93-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07c0 2.64 1.07 5.21 2.93 7.07s4.44 2.93 7.07 2.93z"/></g></g></svg>'
        };
    },
}
</script>

<style scoped>
.card {
    color: white;
    text-align: center;
}

.card-container {
    margin-top: 5rem;
    max-width: 80vw;
}


@media screen and (max-width: 600px) {
    .card-container {
        margin-left: 5px;
    }

    .card-container {
        margin-top: 2rem;
        max-width: 100vw;
    }
}

#skills {
    padding-bottom: 5rem;
    margin-right: auto;
    margin-left: auto;
}
</style>