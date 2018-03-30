<template>
    <div class="body_curriculum">
      <introduction
        title="Graduação">
        Sou formado em Tecnologia em Sitemas para Internet no
        Instituto Federal do Mato Grosso do Sul campus Coxim (IFMS) em 2018.
        Possuo Cursos complementares em design com conhecimentos em Photoshop,
        Illustrator e Corel Draw. Todos eles cursados nas Escolas
        Salesianas em Itaquera, São Paulo - SP.
      </introduction>
      <div class="grey blue_strong">
        <h5 class="body_title">
          <i class="fas fa-star"></i>
          QUALIFICAÇÕES E EXPERIÊNCIAS
        </h5>
        <hr>
        <ul>
          <li>Conhecimentos em linguagens como HTML, CSS, Sass, PHP, Java.</li>
          <li>Conhecimentos em desenvolvimento com Framework PHP Laravel, Framework JavaScript
            VueJs, AngularJs.</li>
          <li>Conhecimentos em Web Services Rest e XML, Servlets.</li>
          <li>Conhecimentos em Desenvolvimento Mobile para Android.</li>
          <li>Conhecimentos em Internet das Coisas (IOT).</li>
          <li>Conhecimentos em Git e GitHub.</li>
          <li>Curso de Criação de APIRest com Spring Boot e Java 8 – Udemy (3.5 Hs).</li>
          <li>Conhecimentos em desenvolvimento utilizando metodologia ágil Scrum, Modelos
            Incremental e Cascata.</li>
          <li>Conhecimento em sistema operacional Linux.</li>
        </ul>
      </div>
      <div class="grey purple">
        <h5 class="body_title">
          <i class="fas fa-graduation-cap"></i>
          EVENTOS ACADÊMICOS
        </h5>
        <hr>
          <ul>
            <li>Javaneiros 2015, 2016 e 2017.</li>
            <li>Semana do Meio Ambiente 2015, 2016 e 2017 IFMS Campus Coxim – MS.</li>
            <li>VIII Secomp UFSCar São Carlos – SP.</li>
            <li>Semana de Ciência e Tecnologia 2016 e 2017 IFMS Campus Coxim – MS.</li>
            <li>Ministrante minicurso Introdução ao Laravel: Um Framework PHP na Semana de Ciência e
              Tecnologia 2017 do IFMS – Campus Coxim.</li>
            <li>Trabalho de Conclusão de Curso – Desenvolvimento de um Sistema para auxilio no ensino
              de algoritmos portugol.</li>
          </ul>
        <ul>

        </ul>
      </div>
    </div>
</template>

<script>
   import Introduction from "../introduction";
    export default {
      name: "graduacao",
      components: {
        Introduction
      }
    }
</script>

<style scoped>

</style>
