<template>
    <div class="flex flex-col gap-8">        
        <div class="flex items-center gap-6 max-lg:flex-col px-4  py-8 rounded-xl border border-white/15 bg-white/5" v-for="n in 7">
            <img src="/images/planets/Saturn.png" alt="" class="mx-auto md:w-3/4 lg:w-1/2 xl:w-1/3 aspect-square object-cover">
            <div class="flex flex-col gap-6 w-full lg:w-1/2 xl:w-2/3">
                <p class="text-3xl font-Cormorant tracking-widest font-semibold">Меркурий - Планета</p>
                <p class="opacity-50 tracking-widest">Посмотрите на Меркурий так, как вы никогда его раньше не видели. Это удивительное путешествие к самой близкой планете к Солнцу откроет перед вами захватывающие пейзажи и экстремальные температурные колебания.</p>
                <p class="text-4xl uppercase tracking-widest font-semibold font-Cormorant">786 500 ₽</p>
                <div class="w-full h-px bg-white/15"></div>
                <div class="flex items-center gap-6 md:gap-8 xl:gap-16 max-md:flex-col md:justify-center">
                    <div class="flex flex-col gap-2 items-center text-center">
                        <p class="opacity-50 uppercase text-xs">Среднее расстояние</p>
                        <p class="font-Cormorant tracking-widest font-semibold text-4xl">384 400 км</p>
                    </div>
                    <div class="flex flex-col gap-2 items-center text-center">
                        <p class="opacity-50 uppercase text-xs">Время в пути</p>
                        <p class="font-Cormorant tracking-widest font-semibold text-4xl">0.1 мес</p>
                    </div>
                    <div class="flex flex-col gap-2 items-center text-center">
                        <p class="opacity-50 uppercase text-xs">Сложность</p>
                        <p class="font-Cormorant tracking-widest font-semibold text-4xl">2</p>
                    </div>
                </div>
                <button class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-[260px] font-Cormorant uppercase relative overflow-hidden group">
                    <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl text-center">Оставить заявку</span>
                    <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2] text-center">Оставить заявку</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>