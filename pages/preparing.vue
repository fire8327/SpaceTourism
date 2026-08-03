<template>
    <div class="flex flex-col gap-12">
        <SectionTitle title="Подготовка к полёту" subtitle="Что взять с собой и что оставить дома" />

        <div class="grid md:grid-cols-2 gap-6">
            <div class="glass-panel">
                <p class="font-display text-xl mb-4">Не забудьте взять</p>
                <ul class="flex flex-col gap-3">
                    <li v-for="item in take" :key="item.title" class="flex gap-3 text-sm">
                        <Icon class="text-space-accent shrink-0 mt-0.5" name="material-symbols:check-circle-outline"/>
                        <span><strong class="text-white font-medium">{{ item.title }}</strong> — {{ item.text }}</span>
                    </li>
                </ul>
            </div>
            <div class="glass-panel">
                <p class="font-display text-xl mb-4">Лучше оставить дома</p>
                <ul class="flex flex-col gap-3">
                    <li v-for="item in leave" :key="item.title" class="flex gap-3 text-sm">
                        <Icon class="text-white/30 shrink-0 mt-0.5" name="material-symbols:cancel-outline"/>
                        <span><strong class="text-white font-medium">{{ item.title }}</strong> — {{ item.text }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <Feedback />
    </div>
</template>

<script setup>
const take = [
    { title: 'Паспорт', text: 'На границе будет досмотр.' },
    { title: 'Тяжёлые ботинки', text: 'Пригодятся в условиях низкой гравитации.' },
    { title: 'Криптовалюта', text: 'Обменяйте Космо-коины для покупки сувениров.' },
    { title: 'Аптечка', text: 'Базовый набор медикаментов на всякий случай.' },
    { title: 'Камера', text: 'Запечатлейте виды вашего путешествия.' },
    { title: 'Блокнот', text: 'Для заметок и личного дневника экспедиции.' },
]

const leave = [
    { title: 'Телефон', text: 'В космосе нет Wi-Fi.' },
    { title: 'Бутерброды', text: 'На борту будет специальное питание.' },
    { title: 'Плавки', text: 'Море Ясности — это кратеры без воды.' },
    { title: 'Зонт', text: 'В космосе нет дождя.' },
    { title: 'Косметика', text: 'Ежедневный макияж не понадобится.' },
    { title: 'Книга', text: 'На борту есть цифровая библиотека.' },
]
</script>
