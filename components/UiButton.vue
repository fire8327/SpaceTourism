<template>
    <NuxtLink v-if="to" :to="to" :class="classes">
        <slot />
    </NuxtLink>
    <button v-else :type="type" :class="classes">
        <slot />
    </button>
</template>

<script setup>
const props = defineProps({
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' },
    to: { type: String, default: null },
    type: { type: String, default: 'button' },
})

const classes = computed(() => [
    {
        primary: 'btn-primary',
        outline: 'btn-outline',
        ghost: 'btn-ghost',
    }[props.variant] || 'btn-primary',
    {
        sm: 'px-4 py-1.5 text-xs',
        md: '',
        lg: 'px-8 py-3 text-base',
    }[props.size] || '',
])
</script>
