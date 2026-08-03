<template>
    <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-8">
            <SectionTitle number="01" title="Миссия и видение" />
            <div class="flex max-lg:flex-col items-center gap-10">
                <p class="text-body w-full lg:w-1/2">Мы стремимся сделать космос доступным для всех. Наша миссия — предоставлять уникальные и безопасные космические путешествия, которые открывают бесконечные возможности для исследования и вдохновения.</p>
                <img src="/images/about/vision.jpg" alt="" class="w-full lg:w-1/2 img-cover aspect-[4/3]">
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <SectionTitle number="02" title="Наша история" />
            <div class="flex max-lg:flex-col items-center gap-10">
                <img src="/images/about/history.jpg" alt="" class="w-full lg:w-1/2 img-cover aspect-[4/3] max-lg:order-last">
                <p class="text-body w-full lg:w-1/2">Компания основана в 2035 году группой энтузиастов космоса и ведущих инженеров. За годы работы мы достигли множества вех и совершили революцию в космическом туризме.</p>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <SectionTitle number="03" title="Наша команда" />
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="member in team" :key="member.name" class="glass-card !p-4 text-center group">
                    <div class="overflow-hidden rounded-xl mb-3">
                        <img :src="member.image" alt="" class="aspect-square object-cover object-top w-full transition-transform duration-500 group-hover:scale-105">
                    </div>
                    <p class="font-display text-lg">{{ member.name }}</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <SectionTitle number="04" title="Наша технология" />
            <div class="flex max-lg:flex-col items-center gap-10">
                <p class="text-body w-full lg:w-1/2">Мы используем самые современные технологии для обеспечения безопасности и комфорта. Наши корабли проходят строгие тесты и сертификации по международным стандартам.</p>
                <img src="/images/about/technology.jpg" alt="" class="w-full lg:w-1/2 img-cover aspect-[4/3]">
            </div>
        </div>
    </div>
</template>

<script setup>
const team = [
    { name: 'Аноуше Ансари', image: '/images/about/1.webp' },
    { name: 'Дуглас Хёрли', image: '/images/about/2.webp' },
    { name: 'Марк Шаттлворт', image: '/images/about/3.webp' },
    { name: 'Виктор Гловер', image: '/images/about/4.webp' },
]
</script>
