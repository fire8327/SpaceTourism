<template>
    <div class="flex flex-col gap-16">
        <div class="flex flex-col gap-6">
            <SectionTitle number="01" title="Личные данные" />
            <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="glass-panel flex flex-col gap-4 max-w-2xl">
                <div class="flex flex-col sm:flex-row gap-3">
                    <FormKit v-model="user.surname" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Фамилия" name="Фамилия" outer-class="w-full sm:w-1/3" input-class="input-field"/>
                    <FormKit v-model="user.name" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Имя" name="Имя" outer-class="w-full sm:w-1/3" input-class="input-field"/>
                    <FormKit v-model="user.patronymic" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Отчество" name="Отчество" outer-class="w-full sm:w-1/3" input-class="input-field"/>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <FormKit v-model="user.login" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Логин" name="Логин" outer-class="w-full sm:w-1/2" input-class="input-field"/>
                    <FormKit v-model="user.password" validation="required" messages-class="text-red-400 text-xs mt-1" type="password" placeholder="Пароль" name="Пароль" outer-class="w-full sm:w-1/2" input-class="input-field"/>
                </div>
                <FormKit v-model="user.phone" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full" input-class="input-field"/>
                <FormKit v-model="user.email" validation="required|email" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Email" name="Email" outer-class="w-full" input-class="input-field"/>
                <UiButton type="submit" class="self-start">Обновить</UiButton>
            </FormKit>
        </div>

        <div class="flex flex-col gap-6">
            <SectionTitle number="02" title="Мои заказы" />
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" v-if="carts && carts.length">
                <div class="glass-card !p-0 overflow-hidden group" v-for="cart in carts" :key="cart.id">
                    <NuxtLink :to="`/shop/product-${cart.products.id}`" class="block overflow-hidden">
                        <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/products/${cart.products.image}`" alt="" class="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-105">
                    </NuxtLink>
                    <div class="p-5 flex flex-col gap-2">
                        <p class="text-xs text-white/40">Заказ #{{ cart.id }}</p>
                        <p class="font-display text-xl">{{ cart.products.title }}</p>
                        <p class="stat-value text-2xl">{{ cart.products.price.toLocaleString() }} ⌬</p>
                    </div>
                </div>
            </div>
            <div v-else class="glass-panel flex flex-col gap-4 items-center text-center py-10">
                <p class="font-display text-2xl font-light">Здесь пока ничего нет</p>
                <p class="text-body text-sm max-w-sm">Вы ещё не сделали ни одного заказа.</p>
                <UiButton to="/shop" variant="outline">В магазин</UiButton>
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <SectionTitle number="03" title="Мои заявки" />
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                v-if="applications && applications.length">
                <div class="glass-card !p-0 overflow-hidden" v-for="application in applications" :key="application.id">
                    <div class="overflow-hidden p-2" :class="isFlex ? 'w-full lg:w-2/5 shrink-0' : 'w-full'">
                        <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/planets/${application.planets.image}`"
                            alt=""
                            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105">
                    </div>
                    <div class="p-5 flex flex-col gap-2">
                        <p class="text-xs text-white/40">Заявка #{{ application.id }}</p>
                        <p class="font-display text-xl">{{ application.planets.name }}</p>
                        <p class="text-body text-sm line-clamp-2">{{ application.planets.desc }}</p>
                        <p class="stat-value text-2xl">{{ application.planets.price.toLocaleString() }} ⌬</p>
                    </div>
                </div>
            </div>
            <div v-else class="glass-panel flex flex-col gap-4 items-center text-center py-10">
                <p class="font-display text-2xl font-light">Здесь пока ничего нет</p>
                <p class="text-body text-sm max-w-sm">Вы ещё не оформили ни одной заявки.</p>
                <UiButton to="/directions" variant="outline">К направлениям</UiButton>
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <SectionTitle number="04" title="Выход из аккаунта" />
            <UiButton class="w-fit" variant="outline" @click="logout()">Выйти</UiButton>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const { id } = storeToRefs(useUserStore())
const { showMessage } = useMessagesStore()
const { logout } = useUserStore()

const { data: users } = await supabase.from('users').select('*').eq('id', id.value)

const user = ref({
    name: users[0].name,
    surname: users[0].surname,
    patronymic: users[0].patronymic,
    login: users[0].login,
    email: users[0].email,
    phone: users[0].phone,
    password: users[0].password,
})

const updateUser = async () => {
    const { error } = await supabase.from('users').update(user.value).eq('id', id.value)
    if (error) showMessage('Произошла ошибка!', false)
    else showMessage('Данные обновлены!', true)
}

const { data: carts } = await supabase.from('cart').select('*, products(*)').eq('userId', id.value).eq('status', 'Оформлен')
const { data: applications } = await supabase.from('applications').select('*, planets(*)').eq('userId', id.value)
</script>
