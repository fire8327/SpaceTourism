<template>
    <div class="col-span-full w-full bg-[url(/images/contacts/main.jpg)] py-6 grid-container relative bg-cover bg-center">
        <div class="flex max-lg:flex-col gap-6 items-center z-[1]">
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <p class="text-2xl font-semibold font-Cormorant tracking-widest">Готовы открыть для себя что-то новое?</p>
                <p class="opacity-50">Сделайте ваше космическое приключение реальностью с нашей помощью. Независимо от ваших потребностей и желаний, мы предлагаем широкий спектр услуг, чтобы ваш визит в космос был незабываемым!</p>
                <p class="opacity-50">Отправьте заявку, заполнив форму справа, мы рассмотрим вашу кандидатуру и свяжемся с вами в течение 24 часов.</p>
                <div class="flex flex-col gap-2 tracking-wider">
                    <NuxtLink to="https://t.me/fire83274" target="_blank" class="text-[#D0D6F9] flex items-center gap-2 transition-all duration-500 hover:opacity-50 w-fit">
                        <Icon class="text-3xl" name="ic:twotone-telegram"/>
                        <span>fire83274</span>
                    </NuxtLink>
                    <NuxtLink to="mailto:fire83274@gmail.com" class="text-[#D0D6F9] flex items-center gap-2 transition-all duration-500 hover:opacity-50 w-fit">
                        <Icon class="text-3xl text-[#D0D6F9]" name="mdi:email-variant"/>
                        <span>fire83274@gmail.com</span>
                    </NuxtLink>                     
                    <NuxtLink to="tel:8 909 304-48-26" class="text-[#D0D6F9] flex items-center gap-2 transition-all duration-500 hover:opacity-50 w-fit">
                        <Icon class="text-3xl text-[#D0D6F9]" name="material-symbols:call"/>
                        <span>8 909 304-48-26</span>
                    </NuxtLink>  
                </div>
            </div>
            <FormKit @submit="feedback" :actions="false" messages-class="hidden" type="form" form-class="flex flex-col gap-6 w-full lg:w-1/2 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-2xl">
                <FormKit v-model="feedbackForm.name" validation="required" messages-class="text-[#E9556D] font-Cormorant" label-class="font-semibold tracking-widest font-Cormorant" type="text" label="Имя" placeholder="Иван" name="Имя" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                <FormKit v-model="feedbackForm.phone" validation="required|number" messages-class="text-[#E9556D] font-Cormorant" label-class="font-semibold tracking-widest font-Cormorant" type="text" label="Телефон" placeholder="8 800 555-35-35" name="Телефон" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                <FormKit v-model="feedbackForm.age" validation="required" messages-class="text-[#E9556D] font-Cormorant" legend-class="font-semibold tracking-widest font-Cormorant" type="radio" :options="['18 - 30', '30 - 45' , '45 - 60']" label="Возраст" name="Возраст" outer-class="w-full" input-class="hidden" options-class="flex items-center gap-2 md:gap-4" wrapper-class="inset-0 cursor-pointer px-[9px] md:px-4 py-2" option-class="flex rounded-xl border border-white/15 has-[:checked]:bg-white/5 has-[:checked]:border-white w-fit"/>
                <div class="flex items-strat gap-2">
                    <FormKit v-model="feedbackForm.height" validation="required|number" messages-class="text-[#E9556D] font-Cormorant" label-class="font-semibold tracking-widest font-Cormorant" type="text" label="Рост" placeholder="180" name="Рост" outer-class="w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-l-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                    <FormKit v-model="feedbackForm.weight" validation="required|number" messages-class="text-[#E9556D] font-Cormorant" label-class="font-semibold tracking-widest font-Cormorant" type="text" label="Вес" placeholder="65" name="Вес" outer-class="w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-r-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                </div>
                <button type="submit" class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-full md:w-1/2 font-Cormorant mx-auto uppercase relative overflow-hidden group">
                    <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Отправить заявку</span>
                    <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Отправить заявку</span>
                </button>
            </FormKit>
        </div>
        <div class="inset-0 absolute bg-black/50 col-span-full"></div>
    </div>
</template>

<script setup>
    /* отправка данных в тг */
    const feedbackForm = ref({
        name: "",
        phone: "",
        height: "",
        weight: "",
        age: ""
    })

    /* функция отправки */
    const { submitFeedback } = useFeedbackStore()

    const feedback = async () => {
        let message = `<b>Заявка на обратную связь!</b> \n` +
        `<b>Имя:</b> ${feedbackForm.value.name} \n` +
        `<b>Телефон:</b> ${feedbackForm.value.phone}` +
        `<b>Возраст:</b> ${feedbackForm.value.age}` +
        `<b>Рост:</b> ${feedbackForm.value.height}` +
        `<b>Вес:</b> ${feedbackForm.value.weight}`
        await submitFeedback(message, feedbackForm.value)
    }
</script>