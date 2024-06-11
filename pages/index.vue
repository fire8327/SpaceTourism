<template>    
    <div class="col-span-full w-full bg-[url(/images/hero/index.jpg)] bg-cover min-h-[calc(100vh-80px)] relative grid-container">
        <div class="absolute col-span-full top-0 w-full bg-gradient-to-b from-[#0B0D17] to-transparent h-40"></div>
        <div class="absolute col-span-full inset-0 bg-[#0B0D17]/30"></div>
        <div class="flex flex-col gap-6 self-center z-[1]">
            <p class="text-2xl md:text-3xl xl:text-4xl font-Cormorant">Итак, вы хотите отправиться в</p>
            <p class="text-4xl md:text-5xl xl:text-6xl font-Cormorant uppercase">Космос</p>
            <p class="max-w-xl">Давайте признаем, если вы хотите отправиться в космос, то лучше уж действительно отправиться в открытый космос, а не зависать где-то на его границе. Ну что ж, расслабьтесь, потому что мы подарим вам по-настоящему незабываемый опыт!</p>
            <NuxtLink class="rounded-full overflow-hidden border-0 border-white/30 hover:border-[20px] font-Cormorant text-[#0B0D17] w-fit uppercase transition-all duration-500">
                <span class="bg-white px-4 py-2">Исследовать</span>
            </NuxtLink>
        </div>
        <div class="absolute col-span-full bottom-0 w-full bg-gradient-to-t from-[#0B0D17] to-transparent h-40"></div>
    </div>
    <div class="flex items-center max-lg:flex-col gap-6">
        <img src="/images/firstblock/main.jpg" alt="" class="w-full lg:w-1/2 rounded-xl aspect-video object-cover">
        <div class="flex flex-col gap-4 w-full lg:w-1/2">
            <p class="text-3xl font-Cormorant">Надоело летать в отпуск за границу? Как на счет того, чтобы слетать на Луну?</p>
            <p class="opacity-50">Устали от пакетных туров и пляжного отдыха? Полотенца и магнитики, которые вы привозите из отпуска уже не радуют ваших близких? В следующий раз привезите им настоящий лунный камень!</p>
            <p class="opacity-50">Мы предлагаем инновационную услугу на туристическом рынке — космический туризм.</p>
            <p class="opacity-50">Берите отпуск и отправляйтесь с нами в полет!</p>
        </div>   
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold"><span class="text-white/50">01</span> Преимущества</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div v-for="advantage in advantages" class="flex flex-col gap-4 border border-white/25 rounded-xl p-4 bg-white/5 transition-all duration-500 hover:scale-105 hover:z-[4]" @mouseenter="isOverlayShow = true"  @mouseleave="isOverlayShow = false">
                <div class="flex items-center gap-4 font-semibold">
                    <Icon class="text-3xl text-[#D0D6F9]" :name="advantage.icon"/>
                    <p class="font-Cormorant uppercase text-xl tracking-widest">{{ advantage.title }}</p>
                </div>
                <p class="opacity-50">{{ advantage.description }}</p>
            </div>
        </div>
        <div class="fixed inset-0 backdrop-blur-xl transition-all duration-500" :class="isOverlayShow ? 'opacity-100 z-[3]' : ' opacity-0 z-[-1]'"></div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold"><span class="text-white/50">02</span> Как это работает</p>
        <div class="flex items-center max-lg:flex-col gap-6">
            <div class="flex flex-col gap-4 relative pl-2 w-full lg:w-1/2">
                <div class="flex flex-col">
                    <div class="rounded-full w-2 h-2 bg-[#D0D6F9] -ml-[19px] mt-1"></div>
                    <p class="font-Cormorant uppercase tracking-widest font-semibold"><span class="text-[#D0D6F9]">01</span> Регистрация и Бронирование</p>
                    <p class="opacity-70">Начните свое космическое приключение с простого шага — регистрации на нашем сайте. Выберите удобную для вас дату и забронируйте полет, заполнив онлайн-форму. </p>
                </div>
                <div class="flex flex-col">
                    <div class="rounded-full w-2 h-2 bg-[#D0D6F9] -ml-[19px] mt-1"></div>
                    <p class="font-Cormorant uppercase tracking-widest font-semibold"><span class="text-[#D0D6F9]">02</span> Подготовка</p>
                    <p class="opacity-70">После подтверждения бронирования вы будете приглашены пройти медицинский осмотр и необходимую подготовку. Наши тренировки включают физическую подготовку, тренировки в центрифуге.</p>
                </div>
                <div class="flex flex-col">
                    <div class="rounded-full w-2 h-2 bg-[#D0D6F9] -ml-[19px] mt-1"></div>
                    <p class="font-Cormorant uppercase tracking-widest font-semibold"><span class="text-[#D0D6F9]">03</span> Предполетная проверка</p>
                    <p class="opacity-70">Перед полетом проводится предполетная проверка, включающая финальный осмотр оборудования, инструктаж по безопасности и контрольный медосмотр.</p>
                </div>
                <div class="flex flex-col">
                    <div class="rounded-full w-2 h-2 bg-[#D0D6F9] -ml-[19px] mt-1"></div>
                    <p class="font-Cormorant uppercase tracking-widest font-semibold"><span class="text-[#D0D6F9]">04</span> Полет</p>
                    <p class="opacity-70">День полета — это момент, когда ваша мечта станет реальностью. Вы сядете на борт нашего космического корабля и отправитесь в невероятное путешествие за пределы земной атмосферы.</p>
                </div>
                <div class="flex flex-col">
                    <div class="rounded-full w-2 h-2 bg-[#D0D6F9] -ml-[19px] mt-1"></div>
                    <p class="font-Cormorant uppercase tracking-widest font-semibold"><span class="text-[#D0D6F9]">05</span> Возвращение</p>
                    <p class="opacity-70">После незабываемого путешествия наступает время возвращения на Землю. Наши специалисты обеспечат мягкую посадку и безопасное возвращение.</p>
                </div>
                <div class="flex flex-col">
                    <div class="rounded-full w-2 h-2 bg-[#D0D6F9] -ml-[19px] mt-1"></div>
                    <p class="font-Cormorant uppercase tracking-widest font-semibold"><span class="text-[#D0D6F9]">06</span> Поделитесь Своей Историей</p>
                    <p class="opacity-70">Ваши впечатления важны для нас! Поделитесь своими переживаниями и фотографиями в наших социальных сетях и на сайте.</p>
                </div>
                <div class="absolute top-0 -left-2 bg-[#D0D6F9]/50 w-[2px] h-full"></div>
            </div>
            <img src="/images/howitworks/main.jpg" alt="" class="w-full lg:w-1/2 rounded-xl lg:aspect-[7/10] lg:object-cover">
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold"><span class="text-white/50">03</span> Галерея</p>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <img :src="`/images/gallery/${n}.jpg`" v-for="n in 6" alt="" class="aspect-video object-cover rounded-xl transition-all duration-500 max-lg:hover:rotate-90 hover:scale-150 hover:z-[4]" @mouseenter="isOverlayShow = true"  @mouseleave="isOverlayShow = false">
            <div class="fixed inset-0 backdrop-blur-xl transition-all duration-500" :class="isOverlayShow ? 'opacity-100 z-[3]' : ' opacity-0 z-[-1]'"></div>
        </div>
        <NuxtLink class="self-end rounded-full overflow-hidden border-0 border-white/30 hover:border-[20px] font-Cormorant text-[#0B0D17] w-fit uppercase transition-all duration-500">
            <span class="bg-white px-4 py-2">Посмотреть ещё</span>
        </NuxtLink>
    </div>
    <div class="col-span-full w-full bg-[url(/images/contacts/main.jpg)] py-6 grid-container relative bg-cover bg-center">
        <div class="flex flex-col gap-6 z-[1]">
            <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold"><span class="text-white/50">04</span> Контакты</p>
            <div class="flex gap-6 max-lg:flex-col">
                <FormKit type="form" :actions="false" messages-class="hidden" form-class="flex flex-col justify-center gap-6 px-4 py-8 bg-white/5 backdrop-blur-2xl rounded-xl w-full lg:w-1/2 border border-white/15">
                    <p class="text-2xl font-Cormorant font-semibold uppercase text-center">Свяжитесь с нами</p>
                    <div class="flex gap-4">
                        <Icon class="text-3xl opacity-50" name="material-symbols:person"/>
                        <FormKit validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Имя" name="Имя" outer-class="w-full" input-class="focus:outline-none focus:appe bg-transparent border-b border-white/50 w-full transition-all duration-500 focus:border-white"/>
                    </div>
                    <div class="flex gap-4">
                        <Icon class="text-3xl opacity-50" name="mdi:email-variant"/>
                        <FormKit validation="required|email" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Email" name="Email" outer-class="w-full" input-class="focus:outline-none focus:appe bg-transparent border-b border-white/50 w-full transition-all duration-500 focus:border-white"/>
                    </div>
                    <div class="flex gap-4">
                        <Icon class="text-3xl opacity-50" name="material-symbols:call"/>
                        <FormKit validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full" input-class="focus:outline-none focus:appe bg-transparent border-b border-white/50 w-full transition-all duration-500 focus:border-white"/>
                    </div>
                    <button type="submit" class="px-4 py-0.5 rounded-full bg-white hover:bg-white/5 text-[#0B0D17] w-full md:w-1/2 font-Cormorant mx-auto uppercase relative overflow-hidden group">
                        <span class="transition-all duration-700 group-hover:opacity-0 inset-0.5">&nbsp;</span>
                        <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Отправить заявку</span>
                    </button>
                </FormKit>
                <div class="flex flex-col gap-4 rounded-xl px-4 py-8 bg-white/5 backdrop-blur-2xl w-full lg:w-1/2 border border-white/15">
                    <p class="text-base md:text-lg xl:text-xl font-Cormorant uppercase">ДАЙТЕ НАМ ЗНАТЬ</p>
                    <p class="text-4xl md:text-5xl xl:text-6xl font-Cormorant">Планируете визит? <br>Мы можем помочь!</p>
                    <p class="max-w-xl">Сделайте ваше космическое приключение реальностью с нашей помощью. Независимо от ваших потребностей и желаний, мы предлагаем широкий спектр услуг, чтобы ваш визит в космос был незабываемым!</p> 
                    <NuxtLink to="https://t.me/fire83274" target="_blank" class="text-[#D0D6F9] flex items-center gap-2 transition-all duration-500 hover:opacity-50 w-fit">
                        <Icon class="text-3xl" name="ic:twotone-telegram"/>
                        <span>fire83274</span>
                    </NuxtLink>
                    <div class="text-[#D0D6F9] flex items-center gap-2 font">
                        <Icon class="text-3xl" name="material-symbols:alarm"/>
                        <span>ПН-ПТ 10:00-18:00 (по земному времени)</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full col-span-full absolute inset-0 bg-black/30"></div>
    </div>  
</template>

<script setup>
    /* оверлей */
    const isOverlayShow = ref(false)

    
    /* преимущества */
    const advantages = [
        {
            icon: 'ion:ios-rocket',
            title: 'Ракеты',
            description: 'Наши ракеты обеспечивают максимальный комфорт и безопасность для вашего космического путешествия. Современные технологии и высокий уровень комфорта позволят вам наслаждаться полетом в полной мере.',
        },
        {
            icon: 'ion:ios-nutrition',
            title: 'Питание',
            description: 'На борту наших ракет вас ждет разнообразное и сбалансированное питание, специально разработанное для космических путешествий. Вкусные и полезные блюда обеспечат вам энергию и хорошее самочувствие на протяжении всего полета.',
        },
        {
            icon: 'tabler:brand-github-copilot',
            title: 'Пилоты',
            description: 'Наши пилоты – это высококвалифицированные профессионалы с богатым опытом работы в космосе. Все они являются бывшими космонавтами, что гарантирует высочайший уровень безопасности и уверенность в полете.',
        },
        {
            icon: 'material-symbols:mountain-flag',
            title: 'Экскурсии',
            description: 'Мы предлагаем уникальные экскурсии на луноходе по Море Ясности и Океану Бурь. Эти незабываемые поездки позволят вам исследовать поверхность Луны и увидеть захватывающие виды, которые невозможно описать словами.',
        }
    ]
</script>