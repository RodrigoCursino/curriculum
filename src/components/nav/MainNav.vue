<template>
  <div>
    <div class="row no-gutters">
      <div class="col-lg-4">
        <photo></photo>
      </div>
      <div class="col-lg-8">
        <div class="row no-gutters">
          <div class="col-lg-12">
            <description></description>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-xl-12 col-sm-12 col-lg-12">
            <options></options>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Description from "./description";
  import Photo from "./photo";
  import Options from "./options";
  export default {
    name: "main-nav",
    components: {
      Options,
      Photo,
      Description
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

</style>
