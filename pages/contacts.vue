<template>
      <div class="flex flex-col gap-8">
        <div class="w-full h-px bg-white/15"></div>
        <div class="flex gap-6 max-lg:flex-col">
            <div class="lg:w-1/3 flex flex-col gap-4">
                <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Контакты</p>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-white/50">Адрес</p>
                    <p class="font-Cormorant tracking-widest font-semibold">Звёздный проспект, дом 42, офис 108, Галактика Андромеда, Космос, 00001</p>
                </div>
                <div>
                    <p class="text-sm text-white/50">Режим работы</p>
                    <p class="mt-2 font-Cormorant tracking-widest font-semibold">Пн-Пт: с 9:00 до 21:00</p>
                    <p class="font-Cormorant tracking-widest font-semibold">Cб-Вс: с 12:00 до 18:00</p>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-white/50">Email</p>
                    <NuxtLink to="mailto:fire83274@gmail.com" class="font-Cormorant tracking-widest font-semibold transition-all duration-500 hover:text-[#D0D6F9] w-fit">fire83274@gmail.com</NuxtLink>
                </div>
                <div class="flex flex-col gap-2">
                    <p class="text-sm text-white/50">Телефон для связи</p>
                    <NuxtLink to="tel:8 909 304-48-26" class="font-Cormorant tracking-widest font-semibold transition-all duration-500 hover:text-[#D0D6F9] w-fit">8 909 304-48-26</NuxtLink>
                </div>
                <div class="flex items-center gap-2">
                    <NuxtLink to="https://vk.com/fire83274" target="_blank" class="transition-all duration-500 hover:text-[#D0D6F9]">
                        <Icon class="text-3xl" name="mdi:vk"/>
                    </NuxtLink>
                    <NuxtLink to="https://t.me/fire83274" target="_blank" class="transition-all duration-500 hover:text-[#D0D6F9]">
                        <Icon class="text-3xl" name="ic:baseline-telegram"/>
                    </NuxtLink>
                    <NuxtLink to="https://github.com/fire8327" target="_blank" class="transition-all duration-500 hover:text-[#D0D6F9]">
                        <Icon class="text-3xl" name="mdi:github"/>
                    </NuxtLink>
                </div>
            </div>
            <img src="/images/contacts/ofice.jpg" class="w-full lg:w-2/3 aspect-video object-cover rounded-xl border border-white/15" alt=""> 
        </div>
        <div class="w-full h-px bg-white/15"></div>
    </div>
    <Feedback></Feedback>
</template>

<script setup>

</script>