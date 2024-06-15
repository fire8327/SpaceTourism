<template>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Подготовка к полёту</p>
        <div class="flex max-lg:flex-col gap-6">
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <p class="font-Cormorant tracking-widest font-semibold text-2xl">Не забудьте взять с собой:</p>
                <ul class="flex flex-col gap-2 list-inside list-disc marker:text-[#D0D6F9] text-white/50">
                    <li><span class="font-semibold text-white font-Cormorant">Паспорт.</span> Визовый режим пока не введен, но на границе будет досмотр.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Тяжелые ботинки.</span> Пригодятся вам в условиях низкой гравитации.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Криптовалюта.</span> Рекомендуем заранее обменять немного Космо-коинов, чтобы купить сувениры.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Солнцезащитные очки.</span> В космосе нет атмосферы, поэтому солнечные лучи могут быть особенно яркими и вредными для глаз.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Аптечка.</span> Возьмите базовый набор медикаментов на случай небольших травм или недомоганий.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Камера.</span> Запечатлейте удивительные виды и моменты вашего космического путешествия.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Ручка и блокнот.</span> Полезно для заметок, зарисовок и ведения личного дневника экспедиции.</li>
                </ul>
            </div>
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <p class="font-Cormorant tracking-widest font-semibold text-2xl">Это лучше оставить дома:</p>
                <ul class="flex flex-col gap-2 list-inside list-disc marker:text-[#D0D6F9] text-white/50">
                    <li><span class="font-semibold text-white font-Cormorant">Телефон.</span> В космосе не ловит ваш любимый оператор и нет Wi-Fi.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Бутерброды.</span> На борту будет питание, которое не разлетится по кабине в условиях невесомости.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Плавки/купальник.</span> Море Ясности и Океан Бурь — это большие кратеры. Без воды.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Зонт.</span> В космосе нет дождя, так что он не понадобится.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Косметика.</span> В условиях космоса вам не потребуется ежедневный макияж.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Бижутерия.</span> Дополнительные украшения могут только мешать и занимать место.</li>
                    <li><span class="font-semibold text-white font-Cormorant">Любимая книга.</span> На борту корабля будет цифровая библиотека с большим выбором литературы.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-span-full w-full bg-[url(/images/contacts/main.jpg)] py-6 grid-container relative bg-cover bg-center">
        <div class="flex max-lg:flex-col gap-6 place-items-center">
            <div class="flex flex-col gap-6 w-full lg:w-1/2">
                <p class="text-2xl font-semibold font-Cormorant tracking-widest">Готовы открыть для себя что-то новое?</p>
                <p class="opacity-50">Отправьте заявку, заполнив форму справа, мы рассмотрим вашу кандидатуру и свяжемся с вами в течение 24 часов.</p>
            </div>
            <FormKit :actions="false" messages-class="hidden" type="form" form-class="flex flex-col gap-6 w-full lg:w-1/2 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-2xl">
                <FormKit validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Имя" name="Имя" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                <FormKit validation="required|number" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                <div class="flex items-strat gap-2">
                    <FormKit validation="required|number" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Рост" name="Рост" outer-class="w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-l-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                    <FormKit validation="required|number" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Вес" name="Вес" outer-class="w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-r-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
                </div>
                <button type="submit" class="px-4 py-0.5 rounded-full hover:bg-white/5 h-8 text-[#0B0D17] w-full md:w-1/2 font-Cormorant mx-auto uppercase relative overflow-hidden group">
                    <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Отправить заявку</span>
                    <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Отправить заявку</span>
                </button>
            </FormKit>
        </div>
    </div>
</template>

<script setup>

</script>