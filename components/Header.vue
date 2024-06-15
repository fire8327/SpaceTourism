<template>
    <header class="w-full grid-container py-6 relative">
        <div class="flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-2">
                <img src="/images/header/logo.png" alt="" class="w-8">
                <span class="font-Cormorant">SpaceTourism</span>
            </NuxtLink>
            <nav class="flex items-center gap-6 transition-all duration-500 z-[5] max-lg:absolute max-lg:left-0 max-lg:w-full max-lg:flex-col max-lg:py-6 max-lg:backdrop-blur-xl max-lg:h-screen max-lg:border-t border-white" :class="isMenuShow ? 'max-lg:top-full' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">00</span> Главная</NuxtLink>
                <NuxtLink to="/directions" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">01</span> Направления</NuxtLink>
                <NuxtLink to="/about" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">02</span> О компании</NuxtLink>
                <div class="flex items-center gap-4">
                    <NuxtLink to="mailto:fire83274@gmail.com" class="transition-all duration-500 hover:opacity-50 w-fit">
                        <Icon class="text-3xl text-[#D0D6F9]" name="mdi:email-variant"/>
                    </NuxtLink>
                    <NuxtLink to="https://t.me/fire83274" target="_blank" class="transition-all duration-500 hover:opacity-50 w-fit">
                        <Icon class="text-3xl text-[#D0D6F9]" name="ic:twotone-telegram"/>
                    </NuxtLink>
                </div>
            </nav>
            <button @click="isMenuShow = !isMenuShow" class="lg:hidden">
                <Icon class="text-3xl" name="ph:list"/>
            </button>
        </div>
    </header>
</template>

<script setup>
    /* показ мобильного меню */
    const isMenuShow = ref(false)


    /* хук */
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', () => {
        isMenuShow.value = false
    })
</script>

<style>
    .router-link-active::after {
        width: 100%;
    }
</style>