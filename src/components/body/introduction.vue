<template>
  <div class="body_content">
    <h3 class="body_title">{{title}}</h3>
    <hr>
    <p class="text-justify">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    name: "introduction",
    props: {
      title:{required:true}
    }
  }
</script>

<style lang="scss" scoped>
   .card_margin {
     margin-right: 8px;
   };
   .leftborder {
     border-left: 3px solid #333;
     padding-left: 14px;
   }
   ul {
     padding-left: 20px;
   }
</style>
