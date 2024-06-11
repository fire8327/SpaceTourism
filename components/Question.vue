<template>
    <div class="flex flex-col">
        <button @click="isAnswerShow = !isAnswerShow" class="flex items-center justify-between p-4 gap-4 border border-white/15 rounded-xl bg-white/5">
            <span class="font-Cormorant text-2xl font-semibold tracking-widest text-left">{{ props.question }}</span>
            <Icon class="text-3xl text-[#D0D6F9] transition-all duration-500 shrink-0" :class="{'rotate-180' : isAnswerShow}" name="material-symbols:arrow-circle-down"/>
        </button>
        <p class="transition-all duration-500 overflow-hidden" :class="isAnswerShow ? 'h-44 sm:h-32 lg:h-20 p-4' : 'h-0'">{{ props.answer }}</p>
    </div>
</template>

<script setup>
    /* показ ответа */
    const isAnswerShow = ref(false)


    /* пропсы */
    const props = defineProps({
        question: String,
        answer: String
    })
</script>