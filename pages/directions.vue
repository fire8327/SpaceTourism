<template>
    <div class="flex flex-col gap-6">
        <div class="flex items-center max-md:flex-col md:justify-between gap-6 p-4 rounded-xl border border-white/15">
            <div class="flex items-center gap-4">
                <button @click="filters.type = 'Все'" class="flex flex-col after:h-px after:bg-white after:transition-all after:duration-500" :class="filters.type == 'Все' ? 'after:w-full' : 'after:w-0'">Все</button>
                <button @click="filters.type = 'Планета'" class="flex flex-col after:h-px after:bg-white after:transition-all after:duration-500" :class="filters.type == 'Планета' ? 'after:w-full' : 'after:w-0'">Планеты</button>
                <button @click="filters.type = 'Спутник'" class="flex flex-col after:h-px after:bg-white after:transition-all after:duration-500" :class="filters.type == 'Спутник' ? 'after:w-full' : 'after:w-0'">Спутники</button>
            </div>
            <div class="flex items-center gap-4 max-md:hidden">
                <button @click="isFlex = true">
                    <Icon class="text-3xl" :class="isFlex ? 'text-white' : 'text-white/15'" name="material-symbols:flex-direction"/>
                </button>
                <button @click="isFlex = false">
                    <Icon class="text-3xl" :class="!isFlex ? 'text-white' : 'text-white/15'" name="flowbite:grid-outline"/>
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-6 p-4 rounded-xl border border-white/15">
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Cormorant tracking-widest font-semibold">Сложность</p>
                <div class="flex items-center gap-2 md:gap-4">
                    <button @click="filters.complexity = '1 - 5'" class="rounded-xl md:px-4 py-1.5 border border-white/15 max-md:w-1/3" :class="{'bg-white/5' : filters.complexity == '1 - 5'}">1 - 5</button>
                    <button @click="filters.complexity = '6 - 10'" class="rounded-xl md:px-4 py-1.5 border border-white/15 max-md:w-1/3" :class="{'bg-white/5' : filters.complexity == '6 - 10'}">6 - 10</button>
                    <button @click="filters.complexity = 'Любая'" class="rounded-xl md:px-4 py-1.5 border border-white/15 max-md:w-1/3" :class="{'bg-white/5' : filters.complexity == 'Любая'}">Любая</button>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Cormorant tracking-widest font-semibold">Время в пути</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full md:w-fit">
                    <button @click="filters.minTravelTime = null, filters.maxTravelTime = 1" :class="{'bg-white/5' : filters.minTravelTime == null && filters.maxTravelTime == 1}" class="rounded-xl px-4 py-1.5 border border-white/15">< 1 года</button>
                    <button @click="filters.minTravelTime = 1, filters.maxTravelTime = 5" :class="{'bg-white/5' : filters.minTravelTime == 1 && filters.maxTravelTime == 5}" class="rounded-xl px-4 py-1.5 border border-white/15">1 - 5 лет</button>
                    <button @click="filters.minTravelTime = 5, filters.maxTravelTime = null" :class="{'bg-white/5' : filters.minTravelTime == 5 && filters.maxTravelTime == null}" class="rounded-xl px-4 py-1.5 border border-white/15">> 5 лет</button>
                    <button @click="filters.minTravelTime = null, filters.maxTravelTime = null" :class="{'bg-white/5' : filters.minTravelTime == null && filters.maxTravelTime == null}" class="rounded-xl px-4 py-1.5 border border-white/15">Любое</button>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-2xl font-Cormorant tracking-widest font-semibold">Цена</p>
                <div class="flex items-center gap-2 w-full md:max-w-[360px]">
                    <FormKit type="text" validation="number" v-model="filters.minPrice" messages-class="text-[#E9556D] font-semibold font-Cormorant tracking-widest" name="От" outer-class="w-1/2" input-class="px-4 py-2 bg-transparent border border-white/15 rounded-l-xl focus:outline-none w-full" placeholder="От"/>
                    <FormKit type="text" validation="number" v-model="filters.maxPrice" messages-class="text-[#E9556D] font-semibold font-Cormorant tracking-widest" name="До" outer-class="w-1/2" input-class="px-4 py-2 bg-transparent border border-white/15 rounded-r-xl focus:outline-none w-full" placeholder="До"/>
                </div>
            </div>
        </div>    
    </div>
    <div :class="isFlex ? 'flex flex-col gap-8' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'" v-if="planets && planets.length > 0">        
        <div class="gap-6 px-4 py-8 rounded-xl border border-white/15 bg-[url(/images/hero/directions.png)] bg-cover" :class="isFlex ? 'flex items-center max-lg:flex-col' : 'flex flex-col'" v-for="planet in planets">
            <div class="group w-full mx-auto" :class="{'md:w-3/4 lg:w-1/2 xl:w-1/3' : isFlex}">
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
                    <button @click="isFormShow = true, bidForm.planet = `${planet.name}`" class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-[260px] font-Cormorant uppercase relative overflow-hidden group">
                        <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl text-center">Оставить заявку</span>
                        <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2] text-center">Оставить заявку</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6 rounded-xl p-4 border border-white/15 bg-[url(/images/hero/directions.png)] bg-cover items-center text-center">
        <p class="text-4xl font-Cormorant tracking-widest font-semibold">По вашему запросу ничего не найдено</p>
        <p class="opacity-50 max-w-2xl">К сожалению, по вашему запросу ничего не найдено. Попробуйте изменить параметры поиска, уточнить запрос или воспользоваться другими критериями фильтрации. Если у вас возникли вопросы или вам нужна помощь, пожалуйста, свяжитесь с нашей службой поддержки.</p>
        <button @click="cancelFilters" class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden group">
            <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Сбросить фильтры</span>
            <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Сбросить фильтры</span>
        </button>
    </div>
    <div @click="isFormShow = false" class="fixed bg-black/50 inset-0 z-[10] transition-all duration-500" :class="{'-translate-x-full' : !isFormShow}"></div>
    <div class="fixed bg-white/5 border border-white/15 rounded-xl flex flex-col gap-6 p-4 transition-all duration-500 top-1/2 -translate-y-1/2 z-[11] backdrop-blur-3xl w-[calc(100vw-32px)] md:w-1/2 xl:w-1/4" :class="isFormShow ? 'left-1/2 -translate-x-1/2' : ' translate-x-[3000px]'">
        <button @click="isFormShow = false" class="self-end">
            <Icon class="text-3xl" name="ic:sharp-close"/>  
        </button>
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold text-center">Заявка на полёт</p>
        <FormKit type="form" :actions="false" messages-class="hidden" form-class="flex flex-col justify-center gap-6 w-full">
            <div class="flex gap-4">
                <Icon class="text-3xl opacity-50" name="material-symbols:person"/>
                <FormKit v-model="bidForm.name" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Имя" name="Имя" outer-class="w-full" input-class="focus:outline-none focus:appe bg-transparent border-b border-white/50 w-full transition-all duration-500 focus:border-white"/>
            </div>
            <div class="flex gap-4">
                <Icon class="text-3xl opacity-50" name="mdi:email-variant"/>
                <FormKit v-model="bidForm.email" validation="required|email" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Email" name="Email" outer-class="w-full" input-class="focus:outline-none focus:appe bg-transparent border-b border-white/50 w-full transition-all duration-500 focus:border-white"/>
            </div>
            <div class="flex gap-4">
                <Icon class="text-3xl opacity-50" name="material-symbols:call"/>
                <FormKit v-model="bidForm.phone" validation="required|number" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full" input-class="focus:outline-none focus:appe bg-transparent border-b border-white/50 w-full transition-all duration-500 focus:border-white"/>
            </div>
            <div class="flex gap-4">
                <Icon class="text-3xl opacity-50" name="material-symbols:globe"/>
                <FormKit v-model="bidForm.planet" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="select" :options="planetsForm" option-class="text-[#1B1B1B]" name="Желаемый полёт" outer-class="w-full" input-class="focus:outline-none focus:appe bg-transparent border-b border-white/50 w-full transition-all duration-500 focus:border-white text-white"/>
            </div>
            <button type="submit" class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-full md:w-1/2 font-Cormorant mx-auto uppercase relative overflow-hidden group">
                <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Отправить заявку</span>
                <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Отправить заявку</span>
            </button>
        </FormKit>
    </div>
</template>

<script setup>
    /* расположение */
    const isFlex = ref(true)


    /* окргуление цен */
    const formatNumber = (number) => {
        if (number >= 1e12) {
            return (number / 1e12).toFixed(0) + " трлн.";
        } else if (number >= 1e9) {
            return (number / 1e9).toFixed(0) + " млрд.";
        } else if (number >= 1e6) {
            return (number / 1e6).toFixed(0) + " млн.";
        } else if (number >= 1e3) {
            return (number / 1e3).toFixed(0) + " тыс.";
        } else {
            return number.toString();
        }
    }


    /* подключение БД */
    const supabase = useSupabaseClient() 

    const { data, error } = await supabase
    .from('planets')
    .select('*')   
    .order('id', { ascending: true })

    const planets = ref(data)


    /* форма */
    const isFormShow = ref(false)
    const bidForm = ref({
        name: "",
        email: "",
        phone: "",
        planet: ""
    })
    const planetsForm = [...new Set(planets.value.map(item => item.name))]


    /* создание фильтров */
    const filters = ref({
        minPrice: null,
        maxPrice: null,
        complexity: "Любая",
        minTravelTime: null,
        maxTravelTime: null,
        type: "Все"
    })
    

    /* получение сложности (строки) */
    const returnComplexity = (str) => {
        const [firstNumber, secondNumber] = str.split(/[\s()-]+/).filter(Boolean).map(Number)
        return [firstNumber, secondNumber]
    }
    

    /* фильтрация */
    const filterData = () => {
        if (filters.value.type !== "Все") {
            planets.value = data.filter(el => {
                return el.type === filters.value.type
            })
        } else {
            planets.value = data
        }

        const complexityRange = returnComplexity(filters.value.complexity)

        planets.value = planets.value.filter(el => {
            if ((filters.value.complexity && filters.value.complexity != 'Любая' && (el.complexity < complexityRange[0] || el.complexity > complexityRange[1])) ||
                (filters.value.minTravelTime && (el.travelTime/12) < filters.value.minTravelTime) ||
                (filters.value.maxTravelTime && (el.travelTime/12) > filters.value.maxTravelTime) ||
                (filters.value.minPrice && el.price < filters.value.minPrice) ||
                (filters.value.maxPrice && el.price > filters.value.maxPrice)) {
                return false
            }
            return true
        })
    }

    watch(filters, (newVal, oldVal) => { //наблюдение за изменением фильтров и запуск функции
        filterData()
    }, { deep: true })


    /* отмена фильтров */
    const cancelFilters = () => {
        planets.value = data
        filters.value.minPrice = null
        filters.value.maxPrice = null
        filters.value.complexity = "Любая"
        filters.value.minTravelTime = null
        filters.value.maxTravelTime = null
        filters.value.type = "Все"
    }
</script>