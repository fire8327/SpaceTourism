<template>
    <div class="flex flex-col gap-12">
        <SectionTitle title="Конвертер валют" subtitle="Рассчитайте бюджет вашего космического приключения" />

        <div class="flex max-lg:flex-col gap-10 items-center">
            <p class="text-body w-full lg:w-1/2">Переведите стоимость ваших космических приключений из одной валюты в другую — будь то полёт на МКС или экспедиция на Марс.</p>
            <img src="/images/hero/converter.jpg" alt="" class="w-full lg:w-1/2 img-cover aspect-video">
        </div>

        <div class="glass-panel">
            <p class="font-display text-lg mb-4">Как пользоваться</p>
            <ol class="flex flex-col gap-2 text-sm text-white/60 list-decimal list-inside">
                <li>Выберите валюту отправления</li>
                <li>Выберите валюту назначения</li>
                <li>Введите сумму для конвертации</li>
            </ol>
        </div>

        <div class="flex max-lg:flex-col gap-6 items-stretch lg:items-end">
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <p class="text-xs uppercase tracking-wider text-white/50">У меня есть</p>
                <div class="flex flex-wrap gap-2">
                    <button v-for="(value, index) in currencies" :key="index" @click="updateFromCurrency(index)" class="chip" :class="{ 'chip-active': converter.from === index }">{{ index }}</button>
                </div>
                <div class="glass-panel flex flex-col gap-2">
                    <input @input="currencyFrom" v-model="converter.fromCount" type="text" class="input-field !border-0 !text-4xl md:!text-5xl !font-display !font-light !bg-transparent !p-0">
                    <p class="text-xs text-white/40">1 {{ converter.from }} = {{ exchangeRate(converter.from, converter.to) }} {{ converter.to }}</p>
                </div>
            </div>

            <button @click="changeCurrency" class="btn-ghost !p-3 self-center lg:mb-16">
                <Icon class="text-3xl max-lg:rotate-90" name="tabler:arrows-exchange-2"/>
            </button>

            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <p class="text-xs uppercase tracking-wider text-white/50">Хочу приобрести</p>
                <div class="flex flex-wrap gap-2">
                    <button v-for="(value, index) in currencies" :key="index" @click="updateToCurrency(index)" class="chip" :class="{ 'chip-active': converter.to === index }">{{ index }}</button>
                </div>
                <div class="glass-panel flex flex-col gap-2">
                    <input @input="currencyTo" v-model="converter.toCount" type="text" class="input-field !border-0 !text-4xl md:!text-5xl !font-display !font-light !bg-transparent !p-0">
                    <p class="text-xs text-white/40">1 {{ converter.to }} = {{ exchangeRate(converter.to, converter.from) }} {{ converter.from }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const currencies = ref({ CC: 1, USD: 83274, EUR: 73362, RUB: 6215838 })
const converter = ref({ from: 'CC', to: 'USD', fromCount: 1, toCount: 83274 })

const exchangeRate = (from, to) => {
    if (currencies.value[from] && currencies.value[to]) return (currencies.value[to] / currencies.value[from])
    return 0
}

const convertCurrency = (amount, from, to) => {
    if (currencies.value[from] && currencies.value[to]) return (amount / currencies.value[from] * currencies.value[to])
    return 0
}

const currencyFrom = () => { converter.value.toCount = convertCurrency(converter.value.fromCount, converter.value.from, converter.value.to).toFixed(2) }
const currencyTo = () => { converter.value.fromCount = convertCurrency(converter.value.toCount, converter.value.to, converter.value.from).toFixed(2) }
const updateFromCurrency = (currency) => { converter.value.from = currency; currencyFrom() }
const updateToCurrency = (currency) => { converter.value.to = currency; currencyTo() }
currencyFrom()

const changeCurrency = () => {
    const t = converter.value.from
    converter.value.from = converter.value.to
    converter.value.to = t
    currencyFrom()
}
</script>
