<template>
  <div>
    <div :class="'grey d-flex flex-row ' + breack">
      <div class="p-2 card my_card">
        <div class="card-body">
          <h5 class="card-title">
            <i class="fas fa-star"></i>
            Experiência Profissional
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">
            DevSquad – Elite Software Developers <br>
            <span class="small">Periodo: 06/2017 – 12/2017</span>
          </h6>
          <p class="card-text">
            <strong>Principais atividades:</strong>
            Desenvolvimento de aplicações web utilizando Framework PHP Laravel
            e Framework JavaScript Vue.Js através de atividades definidas em
            repositório do GitHub
            Todos os códigos eram enviados via linha de comando
            para repositório do GitHub.
          </p>
          <i class="fas fa-globe"></i>
          <span> web-site: </span>
          <a target="_blank" href="http://devsquad.com" class="card-link">
            DevSquad
          </a>
        </div>
      </div>
      <div class="p-2 card" style="width: 100%">
        <div class="card-body">
          <h5 class="card-title">
            <i class="fas fa-tasks"></i>
            Habilidades
          </h5>
          <div v-for="skill in skills" :key="skill.icon">
            <h6 class="text-muted">{{skill.name}}</h6>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                :style="'width: '+ skill.percentage + '%'"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skills",
    watch: {
      width: (val) => {
        console.log(val)
      },
    },
    data() {
      return {
        breack: 'justify-content-between',
        width: window.innerWidth,
        skills: [
          {name: 'Inglês', percentage: 20},
          {name: 'Java', percentage: 70},
          {name: 'PHP', percentage: 70},
          {name: 'Javascript', percentage: 70},
          {name: 'HTML', percentage: 80},
          {name: 'CSS', percentage: 60},
        ]
      }
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getWindowWidth)
        this.getWindowWidth
      })
    },
    methods: {
      getWindowWidth(event) {
        this.width = window.innerWidth;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my_card {
    width: 100%;
    margin-right: 10px;
    border: 0px;
    background-color: inherit
  }

  ;
  .progress {
    margin-bottom: 15px;
    height: 6px;
    background-color: #d0d0d0;
  }
</style>
