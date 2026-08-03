<template>
    <div class="col-span-full w-full grid-container">
        <div class="glass-panel relative overflow-hidden">
            <div class="absolute inset-0 bg-[url(/images/contacts/main.jpg)] bg-cover bg-center opacity-20"></div>
            <div class="relative flex max-lg:flex-col gap-10 lg:gap-16 items-start z-[1]">
                <div class="flex flex-col gap-5 w-full lg:w-1/2">
                    <SectionTitle title="Готовы открыть что-то новое?" />
                    <p class="text-body">Сделайте ваше космическое приключение реальностью. Мы предлагаем широкий спектр услуг, чтобы ваш визит в космос был незабываемым.</p>
                    <p class="text-body text-sm">Заполните форму — мы рассмотрим вашу кандидатуру и свяжемся в течение 24 часов.</p>
                    <div class="flex flex-col gap-3 mt-2">
                        <NuxtLink to="https://t.me/fire83274" target="_blank" class="text-sm text-white/60 hover:text-space-accent transition-colors flex items-center gap-2 w-fit">
                            <Icon class="text-lg" name="ic:baseline-telegram"/>
                            fire83274
                        </NuxtLink>
                        <NuxtLink to="mailto:fire83274@gmail.com" class="text-sm text-white/60 hover:text-space-accent transition-colors flex items-center gap-2 w-fit">
                            <Icon class="text-lg" name="mdi:email-outline"/>
                            fire83274@gmail.com
                        </NuxtLink>
                        <NuxtLink to="tel:8 909 304-48-26" class="text-sm text-white/60 hover:text-space-accent transition-colors flex items-center gap-2 w-fit">
                            <Icon class="text-lg" name="material-symbols:call"/>
                            8 909 304-48-26
                        </NuxtLink>
                    </div>
                </div>

                <FormKit
                    @submit="feedback"
                    :actions="false"
                    messages-class="hidden"
                    type="form"
                    form-class="flex flex-col gap-5 w-full lg:w-1/2"
                >
                    <FormKit v-model="feedbackForm.name" validation="required" messages-class="text-red-400 text-xs mt-1" label-class="text-xs uppercase tracking-wider text-white/50 mb-1.5" type="text" label="Имя" placeholder="Иван" name="Имя" outer-class="w-full" input-class="input-field"/>
                    <FormKit v-model="feedbackForm.phone" validation="required|number" messages-class="text-red-400 text-xs mt-1" label-class="text-xs uppercase tracking-wider text-white/50 mb-1.5" type="text" label="Телефон" placeholder="8 800 555-35-35" name="Телефон" outer-class="w-full" input-class="input-field"/>
                    <FormKit v-model="feedbackForm.age" validation="required" messages-class="text-red-400 text-xs mt-1" legend-class="text-xs uppercase tracking-wider text-white/50 mb-1.5" type="radio" :options="['18 - 30', '30 - 45', '45 - 60']" label="Возраст" name="Возраст" outer-class="w-full" input-class="hidden" options-class="flex flex-wrap items-center gap-2" wrapper-class="cursor-pointer px-4 py-2" option-class="chip has-[:checked]:chip-active"/>
                    <div class="flex gap-3">
                        <FormKit v-model="feedbackForm.height" validation="required|number" messages-class="text-red-400 text-xs mt-1" label-class="text-xs uppercase tracking-wider text-white/50 mb-1.5" type="text" label="Рост" placeholder="180" name="Рост" outer-class="w-1/2" input-class="input-field"/>
                        <FormKit v-model="feedbackForm.weight" validation="required|number" messages-class="text-red-400 text-xs mt-1" label-class="text-xs uppercase tracking-wider text-white/50 mb-1.5" type="text" label="Вес" placeholder="65" name="Вес" outer-class="w-1/2" input-class="input-field"/>
                    </div>
                    <UiButton type="submit" class="self-start mt-2">Отправить заявку</UiButton>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup>
const feedbackForm = ref({
    name: "",
    phone: "",
    height: "",
    weight: "",
    age: "",
})

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
