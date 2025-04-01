<script setup lang="ts">

import CardArticle from "~/components/cards/CardArticle.vue";
</script>

<template>
<div>
  <section id="header" class="p-6 flex justify-center">
    <NuxtImg
    src="/banner-Destop.webp"
    class=" rounded-xl w-10/12"/>
  </section>

  <section id="trending" class= "mx-auto w-10/12">
    <div><h3>NOS CLAVIERS</h3></div>

    <div>
      <CardArticle/>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>