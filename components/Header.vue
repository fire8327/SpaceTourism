<template>
    <header class="w-full grid-container py-6 relative">
        <div class="flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-2">
                <img src="/images/header/logo.png" alt="" class="w-8">
                <span class="font-Cormorant">SpaceTourism</span>
            </NuxtLink>
            <nav class="flex transition-all duration-500 z-[5] w-full md:w-1/2 fixed left-0 top-0 h-screen backdrop-blur-xl" :class="{'-translate-x-full' : !isMenuShow}">
                <button @click="isMenuShow = false" class="absolute top-6 right-6">
                    <Icon class="text-3xl text-[#D0D6F9]" name="hugeicons:cancel-01"/>
                </button>
                <div class="flex flex-col gap-6 grow items-center justify-center">
                    <NuxtLink to="/" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">00</span> Главная</NuxtLink>
                    <NuxtLink to="/directions" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">01</span> Направления</NuxtLink>
                    <NuxtLink to="/about" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">02</span> О компании</NuxtLink>
                    <NuxtLink to="/about" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">03</span> Контакты</NuxtLink>
                    <NuxtLink to="/gallery" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">04</span> Галерея</NuxtLink>
                    <NuxtLink to="/preparing" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">05</span> Подготовка к полёту</NuxtLink>
                </div>
            </nav>
            <div class="flex items-center gap-4">
                <NuxtLink to="mailto:fire83274@gmail.com" class="transition-all duration-500 hover:opacity-50 w-fit">
                    <Icon class="text-3xl text-[#D0D6F9]" name="mdi:email-variant"/>
                </NuxtLink>
                <NuxtLink to="https://t.me/fire83274" target="_blank" class="transition-all duration-500 hover:opacity-50 w-fit">
                    <Icon class="text-3xl text-[#D0D6F9]" name="ic:twotone-telegram"/>
                </NuxtLink>
                <button @click="isMenuShow = !isMenuShow" class="focus:outline-none">
                    <Icon class="text-3xl text-[#D0D6F9]" name="ph:list"/>
                </button>
            </div>
        </div>
        <div @click="isMenuShow = false" class="fixed w-1/2 h-screen top-0 right-0 z-[4] max-md:hidden" :class="{'hidden' : !isMenuShow}"></div>
        <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-2 px-6 py-2 text-lg rounded-2xl w-fit bg-white/5 border border-white/15 backdrop-blur-3xl" :class="messageType ? ' text-white' : 'text-red-500'" v-if="messageTitle">
            <Icon class="text-3xl" name="material-symbols:close-small-rounded"/>
            <span>{{messageTitle}}</span>
        </button>
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


    /* клавиша esc */
    onMounted(() => {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                isMenuShow.value = false
            }
        })
    })


    /* создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())
</script>

<style>
    .router-link-active::after {
        width: 100%;
    }
</style>