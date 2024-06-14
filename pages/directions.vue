<template>
    <div class="flex items-center max-md:flex-col md:justify-between gap-6 p-4 rounded-xl border border-white/15">
        <div class="flex items-center gap-4">
            <button @click="filters.type = 'Все'" class="flex flex-col after:h-px after:bg-white after:transition-all after:duration-500" :class="filters.type == 'Все' ? 'after:w-full' : 'after:w-0'">Все</button>
            <button @click="filters.type = 'Планеты'" class="flex flex-col after:h-px after:bg-white after:transition-all after:duration-500" :class="filters.type == 'Планеты' ? 'after:w-full' : 'after:w-0'">Планеты</button>
            <button @click="filters.type = 'Спутники'" class="flex flex-col after:h-px after:bg-white after:transition-all after:duration-500" :class="filters.type == 'Спутники' ? 'after:w-full' : 'after:w-0'">Спутники</button>
        </div>
        <div class="flex items-center gap-4">
            <button @click="isFlex = true">
                <Icon class="text-3xl" :class="isFlex ? 'text-white' : 'text-white/15'" name="material-symbols:flex-direction"/>
            </button>
            <button @click="isFlex = false">
                <Icon class="text-3xl" :class="!isFlex ? 'text-white' : 'text-white/15'" name="flowbite:grid-outline"/>
            </button>
        </div>
    </div>
    <div :class="isFlex ? 'flex flex-col gap-8' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'">        
        <div class="gap-6 px-4 py-8 rounded-xl border border-white/15 bg-[url(/images/hero/directions.png)] bg-cover" :class="isFlex ? 'flex items-center max-lg:flex-col' : 'flex flex-col'" v-for="planet in planets">
            <div class="overflow-hidden group w-full mx-auto" :class="{'md:w-3/4 lg:w-1/2 xl:w-1/3' : isFlex}">
                <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/planets/${planet.image}`" alt="" class="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-110">
            </div>
            <div class="flex flex-col gap-6 w-full grow" :class="{'lg:w-1/2 xl:w-2/3' : isFlex}">
                <p class="text-5xl font-Cormorant tracking-widest font-semibold">{{ planet.name }}</p>
                <p class="opacity-50 tracking-widest" :class="{'grow' : !isFlex}">{{ planet.desc }}</p>
                <div class="w-full h-px bg-white/15"></div>
                <div class="gap-6" :class="isFlex ? 'flex items-center max-md:flex-col md:justify-center md:gap-8 xl:gap-16' : 'flex flex-col'">
                    <div class="flex flex-col gap-2 items-center text-center">
                        <p class="opacity-50 uppercase text-xs">Тип</p>
                        <p class="font-Cormorant tracking-widest font-semibold text-4xl">{{ planet.type }}</p>
                    </div>
                    <div class="flex flex-col gap-2 items-center text-center">
                        <p class="opacity-50 uppercase text-xs">Среднее расстояние</p>
                        <p class="font-Cormorant tracking-widest font-semibold text-4xl">{{ formatNumber(planet.distance) }} км</p>
                    </div>
                    <div class="flex flex-col gap-2 items-center text-center">
                        <p class="opacity-50 uppercase text-xs">Время в пути</p>
                        <p class="font-Cormorant tracking-widest font-semibold text-4xl">{{ planet.travelTime }} мес.</p>
                    </div>
                    <div class="flex flex-col gap-2 items-center text-center">
                        <p class="opacity-50 uppercase text-xs">Сложность</p>
                        <p class="font-Cormorant tracking-widest font-semibold text-4xl">{{ planet.complexity }}</p>
                    </div>
                </div>
                <div class="flex flex-col gap-4" :class="{'mt-auto' : !isFlex}">
                    <p class="text-3xl uppercase font-semibold tracking-wide">{{ formatNumber(planet.price) }} ₽</p>
                    <button class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-[260px] font-Cormorant uppercase relative overflow-hidden group">
                        <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl text-center">Оставить заявку</span>
                        <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2] text-center">Оставить заявку</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    /* расположение */
    const isFlex = ref(true)


    /* окргуление цен */
    const formatNumber = (number) => {
        if (number >= 1e12) {
            return (number / 1e12).toFixed(2) + " трлн.";
        } else if (number >= 1e9) {
            return (number / 1e9).toFixed(2) + " млрд.";
        } else if (number >= 1e6) {
            return (number / 1e6).toFixed(2) + " млн.";
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(2) + " тыс.";
        } else {
            return number.toString();
        }
    }


    /* подключение БД */
    const supabase = useSupabaseClient() 

    const { data, error } = await supabase
    .from('planets')
    .select('*')   

    const planets = ref(data)


    /* фильтрация */
    const filters = ref({
        minPrice: null,
        maxPrice: null,
        type: "Все"
    })
</script>