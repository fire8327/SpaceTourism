<template>
    <div class="max-w-md mx-auto w-full">
        <FormKit @submit="authUser" type="form" :actions="false" messages-class="hidden" form-class="glass-panel flex flex-col gap-6 items-center">
            <SectionTitle title="Вход" />

            <div class="flex flex-col gap-4 w-full">
                <FormKit v-model="user.login" validation="required" messages-class="text-red-400 text-xs mt-1" type="text" placeholder="Логин" name="Логин" outer-class="w-full" input-class="input-field"/>
                <FormKit v-model="user.password" validation="required" messages-class="text-red-400 text-xs mt-1" type="password" placeholder="Пароль" name="Пароль" outer-class="w-full" input-class="input-field"/>
            </div>

            <UiButton type="submit" class="w-full">Войти</UiButton>

            <div class="flex items-center gap-4 w-full">
                <div class="divider flex-1"></div>
                <p class="text-xs text-white/30">или</p>
                <div class="divider flex-1"></div>
            </div>

            <UiButton to="/reg" variant="outline" class="w-full">Регистрация</UiButton>
        </FormKit>
    </div>
</template>

<script setup>
const user = ref({ login: '', password: '' })
const { showMessage } = useMessagesStore()
const { login } = useUserStore()
const supabase = useSupabaseClient()
const router = useRouter()

const authUser = async () => {
    const { data: users } = await supabase.from('users').select('*').eq('login', user.value.login)

    if (!users[0]) {
        user.value.login = ''
        return showMessage('Неверно введен логин!', false)
    }

    if (user.value.password !== users[0].password) {
        user.value.password = ''
        return showMessage('Неверно введен пароль!', false)
    }

    showMessage('Успешный вход!', true)
    login(users[0].id, users[0].role)
    router.push('/profile')
}
</script>
