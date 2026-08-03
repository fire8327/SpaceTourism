<template>
    <footer class="w-full grid-container mt-auto pt-20 pb-8 border-t border-white/[0.04]">
        <div class="flex flex-col gap-10">
            <div class="flex gap-12 max-lg:flex-col lg:items-start lg:justify-between">
                <div class="flex flex-col gap-4">
                    <NuxtLink to="/" class="flex items-center gap-3 group w-fit">
                        <img src="/images/header/logo.png" alt="" class="w-7 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span class="font-display text-lg">SpaceTourism</span>
                    </NuxtLink>
                    <p class="text-body text-sm max-w-xs">Космический туризм нового поколения. Откройте для себя бесконечность.</p>
                </div>

                <div class="flex gap-16 max-lg:flex-col">
                    <div class="flex flex-col gap-3">
                        <p class="section-label !mb-1">Компания</p>
                        <NuxtLink to="/about" class="text-sm text-white/60 hover:text-space-accent transition-colors flex items-center gap-2 w-fit">
                            О компании
                        </NuxtLink>
                        <NuxtLink to="/history" class="text-sm text-white/60 hover:text-space-accent transition-colors flex items-center gap-2 w-fit">
                            История
                        </NuxtLink>
                        <NuxtLink to="/contacts" class="text-sm text-white/60 hover:text-space-accent transition-colors flex items-center gap-2 w-fit">
                            Контакты
                        </NuxtLink>
                    </div>
                    <div class="flex flex-col gap-3">
                        <p class="section-label !mb-1">Часы работы</p>
                        <p class="text-sm text-white/60">ПН–ПТ: 10:00–18:00</p>
                        <p class="text-sm text-white/60">СБ: 10:00–16:00</p>
                        <p class="text-sm text-white/60">ВС: выходной</p>
                    </div>
                </div>
            </div>

            <div class="divider"></div>
            <p class="text-center text-xs text-white/30">© 2026 SpaceTourism™. All Rights Reserved.</p>
        </div>
    </footer>
</template>
