<template>
     <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Галерея</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <img :src="`/images/gallery/${n}.jpg`" v-for="n in 12" alt="" class="aspect-video object-cover rounded-xl transition-all duration-500 max-lg:hover:rotate-90 hover:scale-150 hover:z-[4]" @mouseenter="isOverlayShow = true"  @mouseleave="isOverlayShow = false">
            <div class="fixed inset-0 backdrop-blur-xl transition-all duration-500" :class="isOverlayShow ? 'opacity-100 z-[3]' : ' opacity-0 z-[-1]'"></div>
        </div>
    </div>
</template>

<script setup>
    /* оверлей */
    const isOverlayShow = ref(false)
</script>