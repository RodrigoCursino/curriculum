<template>
    <div :class="color">
        <i :class="icon"></i>
    </div>
</template>

<script>
    export default {
      name: "item",
      props: {
        icon: {required: true},
        color: {required: true},
        path: {required: true},
      },
    }
</script>

<style scoped lang="scss">
   .my_link {
     text-decoration: none;
   };
</style>
