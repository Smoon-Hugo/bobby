<template>
<div>
<NuxtLayout>
<Navbar/>
  <NuxtPage/>
  <NuxtLink/>
</NuxtLayout>
</div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>