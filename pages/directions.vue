<template>
    <div class="flex flex-col gap-8">        
        <div class="flex items-center gap-6 max-lg:flex-col p-4 rounded-xl border border-white/15 bg-white/5" v-for="n in 7">
            <img src="/images/planets/Mercury.png" alt="" class="mx-auto md:w-3/4 lg:w-1/2 xl:w-1/3">
            <div class="flex flex-col gap-6 w-full lg:w-1/2 xl:w-2/3">
                <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Меркурий</p>
                <p class="opacity-50 tracking-widest">Посмотрите на Меркурий так, как вы никогда его раньше не видели. Это удивительное путешествие к самой близкой планете к Солнцу откроет перед вами захватывающие пейзажи и экстремальные температурные колебания.</p>
                <p class="text-4xl uppercase tracking-widest font-semibold">786 500 ₽</p>
                <NuxtLink class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-[260px] font-Cormorant uppercase relative overflow-hidden group">
                    <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl text-center">Подробнее</span>
                    <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2] text-center">Подробнее</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>