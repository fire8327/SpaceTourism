<template>
    <div class="flex flex-col gap-6">
        <SectionTitle title="Направления" subtitle="Выберите своё следующее космическое приключение" />

        <div class="glass-panel flex items-center max-md:flex-col md:justify-between gap-4">
            <div class="flex items-center gap-1">
                <button
                    v-for="type in ['Все', 'Планета', 'Спутник']"
                    :key="type"
                    @click="filters.type = type"
                    class="chip"
                    :class="{ 'chip-active': filters.type === type }"
                >
                    {{ type === 'Все' ? 'Все' : type === 'Планета' ? 'Планеты' : 'Спутники' }}
                </button>
            </div>
            <div class="flex items-center gap-1 max-md:hidden">
                <button @click="isFlex = true" class="btn-ghost !p-2 !rounded-xl" :class="isFlex ? 'bg-white/10' : ''">
                    <Icon class="text-xl" name="material-symbols:flex-direction"/>
                </button>
                <button @click="isFlex = false" class="btn-ghost !p-2 !rounded-xl" :class="!isFlex ? 'bg-white/10' : ''">
                    <Icon class="text-xl" name="flowbite:grid-outline"/>
                </button>
            </div>
        </div>

        <div class="glass-panel flex flex-col gap-6">
            <div class="flex flex-col gap-3">
                <p class="text-xs uppercase tracking-wider text-white/50">Сложность полёта</p>
                <div class="flex flex-wrap gap-2">
                    <button
                        v-for="c in ['1 - 5', '6 - 10', 'Любая']"
                        :key="c"
                        @click="filters.complexity = c"
                        class="chip"
                        :class="{ 'chip-active': filters.complexity === c }"
                    >{{ c }}</button>
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex flex-col gap-3">
                <p class="text-xs uppercase tracking-wider text-white/50">Время в пути</p>
                <div class="flex flex-wrap gap-2">
                    <button @click="filters.minTravelTime = null; filters.maxTravelTime = 1" class="chip" :class="{ 'chip-active': filters.minTravelTime == null && filters.maxTravelTime == 1 }">< 1 года</button>
                    <button @click="filters.minTravelTime = 1; filters.maxTravelTime = 5" class="chip" :class="{ 'chip-active': filters.minTravelTime == 1 && filters.maxTravelTime == 5 }">1 – 5 лет</button>
                    <button @click="filters.minTravelTime = 5; filters.maxTravelTime = null" class="chip" :class="{ 'chip-active': filters.minTravelTime == 5 && filters.maxTravelTime == null }">> 5 лет</button>
                    <button @click="filters.minTravelTime = null; filters.maxTravelTime = null" class="chip" :class="{ 'chip-active': filters.minTravelTime == null && filters.maxTravelTime == null }">Любое</button>
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex flex-col gap-3">
                <p class="text-xs uppercase tracking-wider text-white/50">Цена</p>
                <div class="flex items-center gap-3 w-full md:max-w-sm">
                    <FormKit type="text" validation="number" v-model="filters.minPrice" messages-class="text-red-400 text-xs" name="От" outer-class="w-1/2" input-class="input-field" placeholder="От"/>
                    <FormKit type="text" validation="number" v-model="filters.maxPrice" messages-class="text-red-400 text-xs" name="До" outer-class="w-1/2" input-class="input-field" placeholder="До"/>
                </div>
            </div>
        </div>
    </div>

    <div :class="isFlex ? 'flex flex-col gap-6' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'" v-if="planets && planets.length > 0">
        <div
            v-for="planet in planets"
            :key="planet.id"
            class="glass-card overflow-hidden group"
            :class="isFlex ? 'flex items-center max-lg:flex-col gap-6 !p-0' : '!p-0'"
        >
            <div class="overflow-hidden" :class="isFlex ? 'w-full lg:w-2/5 shrink-0' : 'w-full'">
                <img
                    :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/planets/${planet.image}`"
                    alt=""
                    class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                >
            </div>
            <div class="flex flex-col gap-4 p-6 grow" :class="isFlex ? 'lg:w-3/5' : ''">
                <div>
                    <p class="stat-label mb-1">{{ planet.type }}</p>
                    <p class="font-display text-3xl md:text-4xl font-light">{{ planet.name }}</p>
                </div>
                <p class="text-body text-sm line-clamp-3">{{ planet.desc }}</p>
                <div class="divider"></div>
                <div class="grid grid-cols-2 gap-4" :class="isFlex ? 'md:grid-cols-4' : ''">
                    <div>
                        <p class="stat-label">Расстояние</p>
                        <p class="stat-value">{{ formatNumber(planet.distance) }}</p>
                    </div>
                    <div>
                        <p class="stat-label">В пути</p>
                        <p class="stat-value">{{ planet.travelTime }} мес.</p>
                    </div>
                    <div>
                        <p class="stat-label">Сложность</p>
                        <p class="stat-value">{{ planet.complexity }}</p>
                    </div>
                    <div>
                        <p class="stat-label">Цена</p>
                        <p class="stat-value">{{ formatNumber(planet.price) }} ⌬</p>
                    </div>
                </div>
                <div class="mt-auto pt-2">
                    <UiButton v-if="authenticated" @click="selectPlanet(planet); makeApplication()" class="w-full md:w-auto">
                        Оставить заявку
                    </UiButton>
                    <p v-else class="text-xs text-white/40">Для оформления заявки войдите в аккаунт</p>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="glass-panel flex flex-col gap-5 items-center text-center py-12">
        <p class="font-display text-3xl font-light">Ничего не найдено</p>
        <p class="text-body max-w-md text-sm">Попробуйте изменить параметры фильтрации или свяжитесь с нашей службой поддержки.</p>
        <UiButton variant="outline" @click="cancelFilters">Сбросить фильтры</UiButton>
    </div>
</template>

<script setup>
const { authenticated, id } = storeToRefs(useUserStore())
const isFlex = ref(false)

const formatNumber = (number) => {
    if (number >= 1e12) return (number / 1e12).toFixed(0) + ' трлн.'
    if (number >= 1e9) return (number / 1e9).toFixed(0) + ' млрд.'
    if (number >= 1e6) return (number / 1e6).toFixed(0) + ' млн.'
    if (number >= 1e3) return (number / 1e3).toFixed(0) + ' тыс.'
    return number.toString()
}

const supabase = useSupabaseClient()
const { data, error } = await supabase.from('planets').select('*').order('id', { ascending: true })
const planets = ref(data)

const desiredPlanet = ref({ id: '', name: '' })
const selectPlanet = (planet) => {
    const { id, name } = planet
    desiredPlanet.value = { id, name }
}

const filters = ref({
    minPrice: null,
    maxPrice: null,
    complexity: 'Любая',
    minTravelTime: null,
    maxTravelTime: null,
    type: 'Все',
})

const returnComplexity = (str) => {
    const [firstNumber, secondNumber] = str.split(/[\s()-]+/).filter(Boolean).map(Number)
    return [firstNumber, secondNumber]
}

const filterData = () => {
    if (filters.value.type !== 'Все') {
        planets.value = data.filter(el => el.type === filters.value.type)
    } else {
        planets.value = data
    }

    const complexityRange = returnComplexity(filters.value.complexity)
    planets.value = planets.value.filter(el => {
        if ((filters.value.complexity && filters.value.complexity != 'Любая' && (el.complexity < complexityRange[0] || el.complexity > complexityRange[1])) ||
            (filters.value.minTravelTime && (el.travelTime / 12) < filters.value.minTravelTime) ||
            (filters.value.maxTravelTime && (el.travelTime / 12) > filters.value.maxTravelTime) ||
            (filters.value.minPrice && el.price < filters.value.minPrice) ||
            (filters.value.maxPrice && el.price > filters.value.maxPrice)) {
            return false
        }
        return true
    })
}

watch(filters, () => filterData(), { deep: true })

const cancelFilters = () => {
    planets.value = data
    filters.value = { minPrice: null, maxPrice: null, complexity: 'Любая', minTravelTime: null, maxTravelTime: null, type: 'Все' }
}

const { submitFeedback } = useFeedbackStore()

const makeApplication = async () => {
    await supabase.from('applications').insert([{ userId: id.value, planetId: desiredPlanet.value.id }]).select()
    const { data: userData } = await supabase.from('users').select().eq('id', id.value)
    const user = userData[0]
    let message = `<b>Заявка на полёт!</b> \n`
        + `<b>ФИО:</b> ${user.surname} ${user.name} ${user.patronymic}\n`
        + `<b>Email:</b> ${user.email}\n`
        + `<b>Телефон:</b> ${user.phone}\n`
        + `<b>Желаемая планета:</b> ${desiredPlanet.value.name}`
    await submitFeedback(message)
}
</script>
