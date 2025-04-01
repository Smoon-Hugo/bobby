<script setup>
const articles = ref([])

const getArticles = async () => {
    const { $supabase } = useNuxtApp()
    const {data, error}  = await $supabase.from('article').select('*')
    if (error) console.error ('Erreur de récupération des articles:', error)
    articles.value = data
  console.log('les data : ', data)
    return data
}

onMounted(async () => {
    await getArticles();
})

</script>

<template>
<div v-for="article in articles">
    <div  class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="public/Retro84PI03.webp" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 id="name" class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {{article.name}}</h5>
        </a>
        <div class="flex items-center justify-between">
            <span id="price" class="text-3xl font-bold text-gray-900 dark:text-white"> {{ article.price }} €</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajout panier</a>
        </div>
    </div>
</div>

</div>
</template>