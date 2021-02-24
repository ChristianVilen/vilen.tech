<template>
  <main>
    <b-tabs pills card align="center" v-model="tabIndex">

      <b-tab class="tab" active :title-link-class="linkClass(0)">
        <template #title>Work Experience</template>
        <div class="card-holder" v-for="(exp, eIndex) in exps" :key="eIndex">
          <b-card class="p-3 mb-4 shadow">
            <b-card-title><h5>{{ exp.title }}</h5></b-card-title>
            <b-card-sub-title><h6>{{ exp.employer }}</h6></b-card-sub-title>
            <b-card-text>{{ exp.time }}</b-card-text>
            <b-card-text>{{ exp.desc }}</b-card-text>
          </b-card>
        </div>
      </b-tab>

      <b-tab class="tab" :title-link-class="linkClass(1)">
        <template #title>Education</template>
        <div class="card-holder" v-for="(edu, eduIndex) in educations" :key="eduIndex">
          <b-card class="p-3 mb-4 shadow">
            <b-card-title><h5>{{ edu.degree }}</h5></b-card-title>
            <b-card-sub-title><h6>{{ edu.program }}</h6></b-card-sub-title>
            <b-card-text>{{ edu.school }}</b-card-text>
            <b-card-text>{{ edu.time }}</b-card-text>
          </b-card>
        </div>
      </b-tab>

      <b-tab class="tab" :title-link-class="linkClass(2)">
        <template #title>Certifications</template>
        <div class="card-holder" v-for="(cert, cIndex) in certs" :key="cIndex">
          <b-card class="p-3 mb-4 shadow">
            <b-card-title><h5>{{ cert.title }}</h5></b-card-title>
            <b-card-sub-title><h6>{{ cert.issuer }}</h6></b-card-sub-title>
            <b-card-text>{{ cert.issued }}</b-card-text>
          </b-card>
        </div>
      </b-tab>

      <b-tab class="tab" :title-link-class="linkClass(3)">
        <template #title>Thesis</template>
        <b-row>
          <b-col cols="12">
            <h4>Data Driven Optimization for Digital Recruitment Marketing: A Pilot Study</h4>
          </b-col>
          <b-col>
            <a href="http://urn.fi/URN:NBN:fi:amk-2020121729076" target="_blank" rel="noreferrer noopener">
            Open in Theseus 👉
          </a>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6"><h5><i>Abstract</i></h5></b-col>
          <b-col cols="12" sm="8" style="margin: 0 auto">
            <p class="body-text">
              PHZ Full Stack Oy is an IT-consulting organization, which has ongoing recruits for projects. PHZ Full
              Stack uses multiple different digital channels for recruitment. The objective of the thesis is to <b>optimize
              the recruitment marketing</b>, in order to get the most applications. <br><br>
              To help PHZ Full Stack Oy to reach its goals, the company has a need to <b>measure and keep track</b> of the
              recruitment marketing results, <b>optimize budgets and assess’ strategies</b>. As there are many factors and
              channels in recruitment marketing it has begun to be a problem to keep track of them all. The objective of
              this thesis project was to maximize the number of job application that PHZ receives from its recruitment
              marketing efforts and allocated budget. <br><br>
              Recruitment marketing advertisements can be optimized with performance marketing, segmentation and
              targeting. For the controlling and optimizing budgets of different recruitment marketing platforms the
              project introduced the <b>Linear Programming</b> method, which will help to measure and budget the results of
              recruitment marketing through a mathematical model. <br><br>
              In the research I created a prototype of a <b>marketing tool</b>, <b>which automates the budgeting</b> of new
              advertisement campaigns. Historical data and the theoretical background in this thesis were used to
              develop the prototype. The prototype was tested with a 3-month period where the prototype tries to predict
              next months results, by optimizing the budgets based on the unit costs of the applications from multiple
              channels. <br><br>
              The outcome of the pilot study was a <b>prototype was able to predict the costs per unit and optimize the
              budgets, so that we were able to get 38% more applications.</b> From 15 to 24 applications per month. New
              channels can be easily integrated into the tool. The tool is already in use at my client.
            </p>
          </b-col>
        </b-row>
      </b-tab>

    </b-tabs>
  </main>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      tabIndex: 0,
      exps: [
        {
          title: 'Software Developer',
          time: 'Mar 2020 - Present',
          employer: 'PHZ Full Stack Oy',
          desc: 'Software development and design in several software projects in house and for customers of PHZ.'
        },
        {
          title: 'Software Developer Intern',
          time: 'Jan 2020 - Mar 2020',
          employer: 'PHZ Full Stack Oy',
          desc: 'Marketing and software development in several in house projects.'
        },
        {
          title: 'Delivery Driver / COO',
          time: '2017 - 2020',
          employer: 'Kuljetusliike Startti Oy',
          desc: 'Driver, Transport Coordinator, procurement, recruitment and training'
        }
      ],
      educations: [
        {
          degree: 'Bachelor of Business Administration (BBA)',
          program: 'Business Information Technologies',
          school: 'Laurea University of Applied Science',
          time: '2017 - 2020'
        },
        {
          degree: 'Graduate of Finnish Matriculation Examination',
          program: 'Upper Secondary School',
          school: 'Lumon Lukio',
          time: '2013 - 2016'
        }
      ],
      certs: [
        {
          title: 'AWS Certified Solutions Architect - Associate',
          issuer: 'Amazon Web Services (AWS',
          issued: 'Issued Jul 2020'
        },
        {
          title: 'The Fundamentals of Digital Marketing',
          issuer: 'Google Digital Garage',
          issued: 'Issued Aps 2020'
        }
      ]
    }
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-dark', 'text-light']
      } else {
        return ['bg-light', 'text-dark']
      }
    }
  }
}
</script>

<style scoped>
.tab {
  font-size: 70%;
}

.body-text {
  text-align: left;
}
</style>