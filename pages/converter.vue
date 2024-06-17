<template>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Конвертер валют</p>
        <div class="flex max-lg:flex-col gap-6 items-center">
            <p class="opacity-50 w-full lg:w-1/2">Добро пожаловать на страницу конвертера валют нашего сайта, посвященного космическому туризму! Здесь вы можете легко и быстро перевести стоимость ваших космических приключений из одной валюты в другую. Независимо от того, планируете ли вы отправиться в путешествие на МКС или исследовать Марс, наш конвертер поможет вам точно рассчитать бюджет.</p>
            <img src="/images/hero/converter.jpg" alt="" class="rounded-xl border border-white/15 w-full lg:w-1/2">
        </div>
        <div class="flex flex-col gap-4">
            <p class="text-2xl font-Cormorant tracking-widest font-semibold">Как пользоваться конвертером валют?</p>
            <ul class="flex flex-col gap-2 list-inside list-decimal text-white/50">
                <li><span class="text-white font-semibold font-Cormorant">Выберите валюту отправления</span> — выберите валюту, в которой у вас есть средства.</li>
                <li><span class="text-white font-semibold font-Cormorant">Выберите валюту назначения</span> — выберите валюту, в которой вы хотите узнать сумму.</li>
                <li><span class="text-white font-semibold font-Cormorant">Введите сумму</span> — введите сумму, которую вы хотите конвертировать.</li>
            </ul>
        </div>
        <div class="flex max-lg:flex-col gap-8 items-center lg:items-end">
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <div class="flex flex-col gap-2">
                    <p class="opacity-50">У меня есть</p>
                    <div class="flex items-center gap-2">
                        <button @click="updateFromCurrency(index)"  :class="converter.from == index ? 'border-white bg-white/5' : 'border-white/15'" class="rounded-xl px-4 py-2 border" v-for="(value, index) in currencies">{{ index }}</button>
                    </div>
                </div>
                <div class="flex flex-col gap-2 rounded-xl p-4 bg-white/5 border border-white/15">
                    <input @input="currencyFrom" v-model="converter.fromCount" type="text" class="w-full rounded-xl border border-white/15 bg-transparent px-4 py-2 text-6xl">
                    <p class="opacity-50">1 {{ converter.from }} = {{ exchangeRate(converter.from, converter.to) }} {{ converter.to }}</p>
                </div>
            </div>
            <button @click="changeCurrency" class="transition-all duration-500 max-lg:rotate-90 lg:mb-16 hover:text-white/30">
                <Icon class="text-5xl" name="tabler:arrows-exchange-2"/>
            </button>
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <div class="flex flex-col gap-2">
                    <p class="opacity-50">Хочу приобрести</p>
                    <div class="flex items-center gap-2">
                        <button @click="updateToCurrency(index)"  :class="converter.to == index ? 'border-white bg-white/5' : 'border-white/15'" class="rounded-xl px-4 py-2 border" v-for="(value, index) in currencies">{{ index }}</button>
                    </div>
                </div>
                <div class="flex flex-col gap-2 rounded-xl p-4 bg-white/5 border border-white/15">
                    <input @input="currencyTo" v-model="converter.toCount" type="text" class="w-full rounded-xl border border-white/15 bg-transparent px-4 py-2 text-6xl">
                    <p class="opacity-50">1 {{ converter.to }} = {{ exchangeRate(converter.to, converter.from) }} {{ converter.from }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    /* курс цен */
    const currencies = ref({
        "CC": 1,
        "USD": 83274,
        "EUR": 73362,
        "RUB": 6215838
    })


    /* форма конвертера */
    const converter = ref({
        from: "CC",
        to: "USD",
        fromCount: 1,
        toCount: 83274
    })


    /* рассчёт обменного курса */
    const exchangeRate = (from, to) => {
        if (currencies.value[from] && currencies.value[to]) {
            return (currencies.value[to] / currencies.value[from])
        }
        return 0
    }


    /* функция конвертации */
    const convertCurrency = (amount, from, to) => {
        if (currencies.value[from] && currencies.value[to]) {
            return (amount / currencies.value[from] * currencies.value[to])
        }
        return 0
    }


    /* обновление значений toCount, fromCount */
    const currencyFrom = () => {
        converter.value.toCount = convertCurrency(converter.value.fromCount, converter.value.from, converter.value.to).toFixed(2)
    }
    const currencyTo = () => {
        converter.value.fromCount = convertCurrency(converter.value.toCount, converter.value.to, converter.value.from).toFixed(2)
    }


    /* обновление выбранной валюты */
    const updateFromCurrency = (currency) => {
        converter.value.from = currency
        currencyFrom()
    }

    const updateToCurrency = (currency) => {
        converter.value.to = currency
        currencyTo()
    }

    currencyFrom()


    /* функция смены наименований валюты */
    const changeCurrency = () =>{
        const transitionalCurrency = converter.value.from
        converter.value.from = converter.value.to
        converter.value.to = transitionalCurrency
        currencyFrom()
    }
</script>