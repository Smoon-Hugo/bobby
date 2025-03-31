<script setup>
const articles = ref([])

onMounted(async () => {
    const { $supabase } = useNuxtApp()
    const { data, error} = await $supabase.from('article').select('*')

    if (data) articles.value = data
    if (error) console.error ('Erreur de récupération des articles:', error)
})

</script>

<template>
<div>


    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="#" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 id="name" class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div class="flex items-center justify-between">
            <span id="price" class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

</div>
</template>