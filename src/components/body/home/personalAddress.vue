<template>
  <div>
    <gmap-map
      :center="marker.position"
      :zoom="13"
      style="width: 100%; height: 330px; margin-bottom: 15px"
    >
      <gmap-marker
        :position="marker.position"
        :clickable="true"
        :draggable="true"
        @click="marker=marker.position"
      ></gmap-marker>
    </gmap-map>
    <div class="grey blue_strong body_content">
      <div class="vertical_bar">
        <address>
          <strong class="card-subtitle mb-2">Rua: Folha de Santana, 267</strong><br>
          Bairro: São Miguel Paulista<br>
          São Paulo - SP, CEP 08050-030 <br>
        </address>

        <address>
          <i class="fas fa-phone icon"></i>
          <abbr title="Phone">Tel: </abbr> (11) 94386-6907 <br>
          <i class="fas fa-envelope icon"></i>
          <a style="text-decoration: none; color: #eeeeee" href="mailto:#">rodrigoapmc@gmail.com</a>
        </address>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personal-address",
    data() {
      return {
        marker: {
          position: {
            lat: -23.5114811,
            lng: -46.4518108,
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
