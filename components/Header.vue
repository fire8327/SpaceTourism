<template>
    <header class="w-full sticky top-0 z-50">
        <div class="w-full grid-container py-5 md:py-6 bg-space-bg/80 backdrop-blur-xl border-b border-white/[0.04]">
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="flex items-center gap-3 group">
                    <img src="/images/header/logo.png" alt="" class="w-7 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span class="font-display text-lg tracking-tight">SpaceTourism</span>
                </NuxtLink>
    
                <nav class="hidden lg:flex items-center gap-8">
                    <NuxtLink to="/" class="nav-link"><span class="text-space-accent/60 mr-1.5 text-xs">00</span>Главная</NuxtLink>
                    <NuxtLink to="/directions" class="nav-link"><span class="text-space-accent/60 mr-1.5 text-xs">01</span>Направления</NuxtLink>
                    <NuxtLink to="/preparing" class="nav-link"><span class="text-space-accent/60 mr-1.5 text-xs">02</span>Подготовка</NuxtLink>
                    <NuxtLink to="/gallery" class="nav-link"><span class="text-space-accent/60 mr-1.5 text-xs">03</span>Галерея</NuxtLink>
                    <NuxtLink to="/shop" class="nav-link"><span class="text-space-accent/60 mr-1.5 text-xs">04</span>Магазин</NuxtLink>
                    <NuxtLink to="/converter" class="nav-link"><span class="text-space-accent/60 mr-1.5 text-xs">05</span>Конвертер</NuxtLink>
                </nav>
    
                <div class="flex items-center gap-2">
                    <NuxtLink v-if="authenticated" to="/cart" class="btn-ghost !p-2.5 !rounded-xl">
                        <Icon class="text-xl" name="ic:twotone-shopping-cart"/>
                    </NuxtLink>
                    <NuxtLink :to="authenticated ? '/profile' : '/auth'" class="btn-ghost !p-2.5 !rounded-xl">
                        <Icon class="text-xl" name="material-symbols:person-outline"/>
                    </NuxtLink>
                    <button @click="isMenuShow = !isMenuShow" class="btn-ghost !p-2.5 !rounded-xl lg:hidden">
                        <Icon class="text-xl" :name="isMenuShow ? 'ph:x' : 'ph:list'"/>
                    </button>
                </div>
            </div>
        </div>

        <Transition name="menu">
            <nav v-if="isMenuShow" class="lg:hidden fixed inset-0 h-fit top-[80px] md:top-[88px] w-full col-span-full px-4 py-6 z-50 bg-space-bg/80 backdrop-blur-2xl flex flex-col justify-center gap-1">
                <NuxtLink to="/" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">00</span>Главная</NuxtLink>
                <NuxtLink to="/directions" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">01</span>Направления</NuxtLink>
                <NuxtLink to="/about" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">02</span>О компании</NuxtLink>
                <NuxtLink to="/contacts" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">03</span>Контакты</NuxtLink>
                <NuxtLink to="/gallery" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">04</span>Галерея</NuxtLink>
                <NuxtLink to="/shop" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">05</span>Магазин</NuxtLink>
                <NuxtLink to="/preparing" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">06</span>Подготовка</NuxtLink>
                <NuxtLink to="/history" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">07</span>История</NuxtLink>
                <NuxtLink to="/converter" class="nav-link text-lg flex"><span class="text-space-accent/60 mr-2 text-sm">08</span>Конвертер</NuxtLink>
            </nav>
        </Transition>

        <Transition name="toast">
            <button
                v-if="messageTitle"
                type="button"
                @click="messageTitle = null"
                class="fixed top-20 right-4 md:right-8 z-[60] flex items-center gap-2 px-5 py-3 text-sm rounded-2xl glass cursor-pointer"
                :class="messageType ? 'text-white' : 'text-red-400'"
            >
                <Icon class="text-lg" name="material-symbols:close-small-rounded"/>
                <span>{{ messageTitle }}</span>
            </button>
        </Transition>
    </header>
</template>

<script setup>
const isMenuShow = ref(false)

const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
    isMenuShow.value = false
})

onMounted(() => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') isMenuShow.value = false
    })
})

const { messageTitle, messageType } = storeToRefs(useMessagesStore())
const { authenticated } = storeToRefs(useUserStore())
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
    transition: opacity 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
    opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
