<template>
    <div class="flex flex-col gap-16">
        <SectionTitle title="История космонавтики" subtitle="От первого полёта до межзвёздных путешествий" />

        <div v-for="(era, i) in eras" :key="i" class="flex max-lg:flex-col gap-10 items-start" :class="i % 2 === 1 ? 'lg:flex-row-reverse' : ''">
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <p class="section-label">{{ era.period }}</p>
                <h3 class="font-display text-2xl font-light">{{ era.title }}</h3>
                <p v-for="(p, j) in era.paragraphs" :key="j" class="text-body text-sm">{{ p }}</p>
            </div>
            <img :src="era.image" alt="" class="w-full lg:w-1/2 img-cover aspect-[4/5] lg:sticky lg:top-28">
        </div>
    </div>
</template>

<script setup>
const eras = [
    {
        period: 'До 2020',
        title: 'Эра начала',
        image: '/images/history/1.jpg',
        paragraphs: [
            'В 1961 году Юрий Гагарин первым покорил космос на корабле «Восток-1», доказав, что человек может выжить в условиях невесомости.',
            'В 1969 году Нил Армстронг и Базз Олдрин ступили на Луну — гигантский скачок для человечества.',
            'С 1998 года МКС стала орбитальным домом, объединив усилия NASA, Роскосмоса, ESA и JAXA.',
        ],
    },
    {
        period: '2020 – 2025',
        title: 'Период расцвета',
        image: '/images/history/2.jpg',
        paragraphs: [
            'SpaceX осуществила первую коммерческую пилотируемую миссию на МКС — начало эры частных компаний в космосе.',
            'К 2023 году Китай завершил строительство станции Тяньгун, а NASA и ESA разрабатывали миссии к астероидам.',
            'В 2025 году миссия Artemis вернула людей на Луну с долговременными базами.',
        ],
    },
    {
        period: '2025 – 2030',
        title: 'Эпоха колонизации',
        image: '/images/history/3.jpg',
        paragraphs: [
            'В 2026 году первая лунная колония приняла жителей — автономные поселения с системами жизнеобеспечения.',
            'В 2027 году открылся первый космический отель на орбите Земли.',
            'В 2028 году международная миссия высадилась на Марс, начав строительство первой базы.',
        ],
    },
    {
        period: '2030 – 2035',
        title: 'Галактическое расширение',
        image: '/images/history/4.jpg',
        paragraphs: [
            'Миссия «Космическая Одиссея» доставила станции к орбите Плутона для изучения дальних рубежей.',
            'Blue Origin создавала космические заводы на астероидах для мегаструктур.',
            'В 2035 году «Вояджер II» отправился к Проксиме Центавра — начало межзвёздных путешествий.',
        ],
    },
]
</script>
