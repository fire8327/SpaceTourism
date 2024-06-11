<template>
    <footer class="w-full min-h-[200px] bg-[url(/images/footer/main.png)] bg-cover relative grid-container pt-36 pb-10">
        <div class="absolute col-span-full top-0 w-full bg-gradient-to-b from-[#0B0D17] to-transparent h-32"></div>
        <div class="flex flex-col gap-6">
            <div class="flex gap-12 max-lg:flex-col lg:items-start lg:justify-between">
                <NuxtLink to="/" class="flex items-center gap-2">
                    <img src="/images/header/logo.png" alt="" class="w-8">
                    <span class="font-Cormorant">SpaceTourism</span>
                </NuxtLink>
                <div class="flex gap-12 lg:gap-16 max-lg:flex-col">
                    <div class="flex flex-col gap-4">
                        <p class="uppercase font-Cormorant tracking-widest font-semibold text-lg">Ссылки</p>
                        <NuxtLink to="/" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">00</span> Главная</NuxtLink>
                        <NuxtLink class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">01</span> Направления</NuxtLink>
                        <NuxtLink to="/about" class="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-full"><span class="font-semibold">02</span> О компании</NuxtLink>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="uppercase font-Cormorant tracking-widest font-semibold text-lg">Контакты</p>
                        <NuxtLink to="https://t.me/fire83274" target="_blank" class="text-[#D0D6F9] flex items-center gap-2 transition-all duration-500 hover:opacity-50 w-fit">
                            <Icon class="text-3xl" name="ic:twotone-telegram"/>
                            <span>fire83274</span>
                        </NuxtLink>
                        <NuxtLink to="mailto:fire83274@gmail.com" class="text-[#D0D6F9] flex items-center gap-2 transition-all duration-500 hover:opacity-50 w-fit">
                            <Icon class="text-3xl text-[#D0D6F9]" name="mdi:email-variant"/>
                            <span>fire83274@gmail.com</span>
                        </NuxtLink>                     
                        <NuxtLink to="tel:8 909 304-48-26" class="text-[#D0D6F9] flex items-center gap-2 transition-all duration-500 hover:opacity-50 w-fit">
                            <Icon class="text-3xl text-[#D0D6F9]" name="material-symbols:call"/>
                            <span>8 909 304-48-26</span>
                        </NuxtLink>                   
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="uppercase font-Cormorant tracking-widest font-semibold text-lg">Часы работы</p>
                        <p>ПН-ПТ: 10:00-18:00</p>
                        <p>СБ: 10:00-16:00</p>
                        <p>ВС: закрыто</p>               
                    </div>
                </div>
            </div>
            <div class="w-full h-px bg-white"></div>
            <p class="text-center">© 2024 <span class="font-Cormorant">SpaceTourism™</span>. All Rights Reserved.</p>
        </div>
    </footer>
</template>

<script setup>

</script>