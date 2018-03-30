<template>
  <div class="container">
    <div class="row no-gutters">
      <div class="col-md-10 curriculum">
        <main-nav></main-nav>
        <router-view></router-view>
        <p class="text-muted text-center">&copy; todos os direitos reservados</p>
      </div>
    </div>
  </div>
</template>

<script>

import MainNav from "./nav/MainNav";

export default {
  components: {
    MainNav
  },
  name: 'Curriculum',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
