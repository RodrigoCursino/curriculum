<template>
  <div>
    <div class="d-flex align-items-stretch">
      <div class="p-2 back-blue"><i class="fab fa-github icon"></i></div>
      <div class="p-2 back-green"></div>
      <div class="p-2 back-red"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Curriculum',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" scoped>
  $red: rgb(255.0,0.0,0.0);
  $green: rgb(0.0,255.0,0.0);
  $blue: rgb(0.0,0.0,255.0);
  .icon {
    color: white;
    font-size: 1.8em;
  }
  .back-red {
    background-color: $red;
  };
  .back-blue {
    background-color: $blue;
  };
  .back-green {
    background-color: $green;
  };
</style>
