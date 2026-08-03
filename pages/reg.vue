<template>
    <div class="max-w-lg mx-auto w-full">
        <FormKit @submit="regUser" type="form" :actions="false" messages-class="hidden" form-class="glass-panel flex flex-col gap-6 items-center">
            <SectionTitle title="Регистрация" />

            <div class="flex flex-col sm:flex-row gap-3 w-full">
                <FormKit v-model="user.surname" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Фамилия" name="Фамилия" outer-class="w-full sm:w-1/3" input-class="input-field"/>
                <FormKit v-model="user.name" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Имя" name="Имя" outer-class="w-full sm:w-1/3" input-class="input-field"/>
                <FormKit v-model="user.patronymic" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Отчество" name="Отчество" outer-class="w-full sm:w-1/3" input-class="input-field"/>
            </div>
            <div class="flex flex-col sm:flex-row gap-3 w-full">
                <FormKit v-model="user.login" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Логин" name="Логин" outer-class="w-full sm:w-1/2" input-class="input-field"/>
                <FormKit v-model="user.password" validation="required" messages-class="text-red-400 text-xs mt-1" type="password" placeholder="Пароль" name="Пароль" outer-class="w-full sm:w-1/2" input-class="input-field"/>
            </div>
            <FormKit v-model="user.phone" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full" input-class="input-field"/>
            <FormKit v-model="user.email" validation="required|email" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Email" name="Email" outer-class="w-full" input-class="input-field"/>

            <UiButton type="submit" class="w-full">Зарегистрироваться</UiButton>

            <div class="flex items-center gap-4 w-full">
                <div class="divider flex-1"></div>
                <p class="text-xs text-white/30">или</p>
                <div class="divider flex-1"></div>
            </div>

            <UiButton to="/auth" variant="outline" class="w-full">Войти</UiButton>
        </FormKit>
    </div>
</template>

<script setup>
const user = ref({ name: '', surname: '', patronymic: '', login: '', email: '', phone: '', password: '' })
const { showMessage } = useMessagesStore()
const supabase = useSupabaseClient()
const router = useRouter()

const regUser = async () => {
    const { data: users } = await supabase.from('users').select('*').eq('login', user.value.login)

    if (users[0]) {
        user.value.login = ''
        return showMessage('Такой логин уже используется!', false)
    }

    const { data, error } = await supabase.from('users').insert(user.value).select()

    if (data) {
        showMessage('Успешная регистрация!', true)
        router.push('/auth')
    } else {
        showMessage('Произошла ошибка!', false)
    }
}
</script>
