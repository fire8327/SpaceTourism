<template>
    <div class="section-heading">
        <p v-if="number" class="section-label">{{ number }}</p>
        <component :is="tag" class="section-title">{{ title }}</component>
        <p v-if="subtitle" class="text-body max-w-2xl mt-2">{{ subtitle }}</p>
    </div>
</template>

<script setup>
defineProps({
    number: String,
    title: { type: String, required: true },
    subtitle: String,
    tag: { type: String, default: 'h2' },
})
</script>
