<template>
  <div class="body_curriculum">
    <introduction
      title="Sobre Mim">
      Sou natural de São Paulo - SP, inclusive é a cidade onde moro atualmente,
      tenho {{birthDate}} anos de idade, gosto muito de tecnologia e design,
      trabalho bem em equipe, sei trabalhar com metodologias agéis como o Scrum
      e repositórios online como o GitHub, tenho facilidade em me adptar a novos desafios.
    </introduction>
    <skills></skills>
    <personal-address></personal-address>
  </div>
</template>

<script>
  import Skills from "./skills";
  import PersonalAddress from "./personalAddress";
  import Introduction from "../introduction";
  export default {
    components: {
      Introduction,
      PersonalAddress,
      Skills
      },
    name: "home",
    computed: {
      birthDate: () => {
        let date = moment()
        if (date.month > 6) {
          return 1987 - date.year();
        } else  {
          return (date.year() - 1987) - 1;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
