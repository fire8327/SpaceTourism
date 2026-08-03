<template>
    <div class="flex flex-col gap-12">
        <SectionTitle title="Контакты" subtitle="Мы всегда на связи" />

        <div class="flex gap-10 max-lg:flex-col">
            <div class="lg:w-1/3 flex flex-col gap-6">
                <div class="flex flex-col gap-1">
                    <p class="stat-label">Адрес</p>
                    <p class="text-sm leading-relaxed">Звёздный проспект, дом 42, офис 108, Галактика Андромеда, Космос, 00001</p>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="stat-label">Режим работы</p>
                    <p class="text-sm text-white/60">Пн–Пт: 9:00 – 21:00</p>
                    <p class="text-sm text-white/60">Сб–Вс: 12:00 – 18:00</p>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="stat-label">Email</p>
                    <NuxtLink to="mailto:fire83274@gmail.com" class="text-sm hover:text-space-accent transition-colors w-fit">fire83274@gmail.com</NuxtLink>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="stat-label">Телефон</p>
                    <NuxtLink to="tel:8 909 304-48-26" class="text-sm hover:text-space-accent transition-colors w-fit">8 909 304-48-26</NuxtLink>
                </div>
                <div class="flex items-center gap-3 pt-2">
                    <NuxtLink to="https://vk.com/fire83274" target="_blank" class="btn-ghost !p-2 !rounded-xl">
                        <Icon class="text-xl" name="mdi:vk"/>
                    </NuxtLink>
                    <NuxtLink to="https://t.me/fire83274" target="_blank" class="btn-ghost !p-2 !rounded-xl">
                        <Icon class="text-xl" name="ic:baseline-telegram"/>
                    </NuxtLink>
                    <NuxtLink to="https://github.com/fire8327" target="_blank" class="btn-ghost !p-2 !rounded-xl">
                        <Icon class="text-xl" name="mdi:github"/>
                    </NuxtLink>
                </div>
            </div>
            <img src="/images/contacts/ofice.jpg" class="w-full lg:w-2/3 aspect-video img-cover" alt="">
        </div>

        <Feedback />
    </div>
</template>
