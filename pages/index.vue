<template>
    <div class="col-span-full w-full bg-[url(/images/hero/index.jpg)] bg-cover bg-center min-h-[calc(100vh-80px)] relative grid-container items-center">
        <div class="absolute inset-0 bg-gradient-to-b from-space-bg via-space-bg/40 to-space-bg col-span-full"></div>
        <div class="relative z-[1] flex flex-col gap-6 max-w-2xl animate-slide-up py-20">
            <p class="section-label">Добро пожаловать</p>
            <h1 class="font-display text-5xl md:text-6xl xl:text-7xl font-light leading-[1.1]">
                Отправьтесь в <span class="text-space-accent">космос</span>
            </h1>
            <p class="text-body text-lg max-w-lg">
                Если вы хотите в космос — отправляйтесь в открытый космос, а не зависайте на его границе. Мы подарим вам по-настоящему незабываемый опыт.
            </p>
            <UiButton to="/directions" class="w-fit mt-2">Исследовать</UiButton>
        </div>
    </div>

    <div class="flex items-center max-lg:flex-col gap-10 lg:gap-16">
        <img src="/images/firstblock/main.jpg" alt="" class="w-full lg:w-1/2 img-cover aspect-[4/3]">
        <div class="flex flex-col gap-5 w-full lg:w-1/2">
            <SectionTitle title="Надоело летать за границу? Слетайте на Луну." />
            <p class="text-body">Устали от пакетных туров и пляжного отдыха? Полотенца и магнитики уже не радуют близких? Привезите им настоящий лунный камень.</p>
            <p class="text-body">Мы предлагаем инновационную услугу — космический туризм. Берите отпуск и отправляйтесь с нами в полёт.</p>
        </div>
    </div>

    <div class="flex flex-col gap-8">
        <SectionTitle number="01" title="Преимущества" />
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div v-for="advantage in advantages" :key="advantage.title" class="glass-card group">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-xl bg-space-accent/10 flex items-center justify-center">
                        <Icon class="text-xl text-space-accent" :name="advantage.icon"/>
                    </div>
                    <p class="font-display text-lg">{{ advantage.title }}</p>
                </div>
                <p class="text-body text-sm">{{ advantage.description }}</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-8">
        <SectionTitle number="02" title="Как это работает" />
        <div class="flex items-start max-lg:flex-col gap-10 lg:gap-16">
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <div v-for="(step, i) in steps" :key="i" class="flex gap-4 group">
                    <div class="flex flex-col items-center">
                        <div class="w-8 h-8 rounded-full border border-space-accent/30 flex items-center justify-center text-xs text-space-accent font-medium shrink-0">
                            {{ String(i + 1).padStart(2, '0') }}
                        </div>
                        <div v-if="i < steps.length - 1" class="w-px flex-1 bg-white/[0.06] my-2"></div>
                    </div>
                    <div class="pb-6">
                        <p class="font-display text-lg mb-1">{{ step.title }}</p>
                        <p class="text-body text-sm">{{ step.text }}</p>
                    </div>
                </div>
            </div>
            <img src="/images/howitworks/main.jpg" alt="" class="w-full lg:w-1/2 img-cover aspect-[3/4] lg:sticky lg:top-28">
        </div>
    </div>

    <div class="flex flex-col gap-8">
        <SectionTitle number="03" title="Галерея" />
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            <div v-for="n in 6" :key="n" class="overflow-hidden rounded-2xl group">
                <img
                    :src="`/images/gallery/${n}.jpg`"
                    alt=""
                    class="aspect-[4/3] object-cover w-full transition-transform duration-500 group-hover:scale-105"
                >
            </div>
        </div>
        <UiButton to="/gallery" variant="outline" class="self-end">Посмотреть ещё</UiButton>
    </div>

    <div class="col-span-full w-full grid-container">
        <SectionTitle number="04" title="Связаться с нами" />
        <Feedback />
    </div>

    <div class="flex flex-col gap-6">
        <SectionTitle number="05" title="Часто задаваемые вопросы" />
        <div class="flex flex-col gap-3">
            <Question v-for="FAQ in FAQs" :key="FAQ.question" v-bind="FAQ" />
        </div>
    </div>
</template>

<script setup>
const advantages = [
    {
        icon: 'ion:ios-rocket',
        title: 'Ракеты',
        description: 'Современные технологии и высокий уровень комфорта для полного наслаждения полётом.',
    },
    {
        icon: 'ion:ios-nutrition',
        title: 'Питание',
        description: 'Разнообразное и сбалансированное питание, разработанное специально для космических путешествий.',
    },
    {
        icon: 'tabler:brand-github-copilot',
        title: 'Пилоты',
        description: 'Высококвалифицированные профессионалы с богатым опытом работы в космосе.',
    },
    {
        icon: 'material-symbols:mountain-flag',
        title: 'Экскурсии',
        description: 'Уникальные поездки на луноходе по Морю Ясности и Океану Бурь.',
    },
]

const steps = [
    { title: 'Регистрация и бронирование', text: 'Выберите дату и забронируйте полёт, заполнив онлайн-форму.' },
    { title: 'Подготовка', text: 'Медицинский осмотр, физическая подготовка и тренировки в центрифуге.' },
    { title: 'Предполётная проверка', text: 'Финальный осмотр оборудования, инструктаж и контрольный медосмотр.' },
    { title: 'Полёт', text: 'Посадка на борт космического корабля и путешествие за пределы атмосферы.' },
    { title: 'Возвращение', text: 'Мягкая посадка и безопасное возвращение на Землю.' },
    { title: 'Поделитесь историей', text: 'Расскажите о впечатлениях в социальных сетях и на нашем сайте.' },
]

const FAQs = [
    { question: 'Какой уровень безопасности обеспечивается во время космического полёта?', answer: 'Космические полёты проходят строгие проверки и тестирование для обеспечения максимальной безопасности. На борту есть системы аварийного спасения и резервные системы.' },
    { question: 'Как долго длится космический полёт до достижения нужной орбиты?', answer: 'Обычно полёт до МКС занимает около 6 часов.' },
    { question: 'Каковы требования к здоровью для космонавта?', answer: 'Необходимо хорошее здоровье и физическая подготовка, медицинские обследования и тренировки.' },
    { question: 'Сколько человек может одновременно находиться на борту?', answer: 'Количество зависит от типа корабля и миссии — на МКС от 6 до 10 человек.' },
    { question: 'Какие виды научных исследований проводятся в космосе?', answer: 'Исследования в области медицины, биологии, физики, астрономии и других наук.' },
    { question: 'Как происходит подготовка к космическому полёту?', answer: 'Тренировки, симуляторы полётов, медицинские проверки и изучение систем корабля.' },
    { question: 'Как обеспечивается питание и комфорт во время полёта?', answer: 'Специальные упакованные блюда и системы регенерации воды для поддержания питания и гигиены.' },
    { question: 'Какие опасности могут возникнуть и как они решаются?', answer: 'Радиация и микрогравитация решаются благодаря системам защиты и подготовке экипажа.' },
    { question: 'Какие виды развлечений доступны астронавтам?', answer: 'Чтение, фильмы, фотографирование и общение с семьёй через интернет.' },
    { question: 'Какие новые технологии разрабатываются для будущих полётов?', answer: 'Более мощные ракеты, системы автономного управления и эффективные системы жизнеобеспечения.' },
]
</script>
