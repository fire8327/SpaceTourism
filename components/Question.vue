<template>
    <div class="glass rounded-2xl overflow-hidden">
        <button
            @click="isAnswerShow = !isAnswerShow"
            class="flex items-center justify-between w-full p-5 gap-4 text-left hover:bg-white/[0.02] transition-colors"
        >
            <span class="font-display text-lg md:text-xl font-light pr-4">{{ props.question }}</span>
            <Icon
                class="text-xl text-space-accent shrink-0 transition-transform duration-300"
                :class="{ 'rotate-180': isAnswerShow }"
                name="material-symbols:keyboard-arrow-down-rounded"
            />
        </button>
        <div
            class="grid transition-all duration-300 ease-in-out"
            :class="isAnswerShow ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
        >
            <div class="overflow-hidden">
                <p class="px-5 pb-5 text-body text-sm leading-relaxed">{{ props.answer }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const isAnswerShow = ref(false)

const props = defineProps({
    question: String,
    answer: String,
})
</script>
