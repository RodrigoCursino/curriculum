<template>
  <div>
    <div class="d-flex justify-content-around">
          <item
            v-for="i in itens"
            :key="i.icon"
            class="p-2 item"
            :color="i.color"
            :path="i.path"
            :icon="i.icon"
            @click.native="selecionar(i)"
          >
          </item>
    </div>
  </div>
</template>

<script>
    import Item from "./item";

    export default {
      components: {Item},
      name: "options",
      data () {
        return {
          color: 'orange',
          itens: [
            {color: 'white', icon: 'fas fa-user', path: 'home'},
            {color: 'blue', icon: 'fas fa-graduation-cap', path: 'graduacao'},
            {color: 'red', icon: 'fab fa-github', path: 'portifolio'},
            {color: 'purple', icon: 'fas fa-globe', path: 'outros'},
          ]
        }
      },
      mounted () {
        this.inReload()
      },
      methods: {
        selecionar (item) {
          for (let i in this.itens) {
            if (this.itens[i].color === 'white') {
              this.itens[i].color = this.color;
            }
          }
          this.color = item.color;
          item.color = 'white';
          this.$router.replace(item.path)
        },
        inReload () {
          if (this.$route.name !== 'home') {
            this.itens[0].color = this.color;
            for (let i in this.itens) {
              if (this.itens[i].path === this.$route.name) {
                this.color = this.itens[i].color;
                this.itens[i].color = 'white';
              }
            }
          }
        }
      }
    }
</script>

<style scoped>

</style>
