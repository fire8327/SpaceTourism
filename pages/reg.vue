<template>
    <FormKit @submit="regUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center px-4 py-8 rounded-xl bg-white/5 border border-white/15 backdrop-blur-3xl bg-[url(/images/hero/directions.png)] bg-cover">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Регистрация</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Фамилия" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
            <FormKit v-model="user.name" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Имя" name="Имя" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
            <FormKit v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Отчество" name="Отчество" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
        </div>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit v-model="user.login" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Логин" name="Логин" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
            <FormKit v-model="user.password" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="password" placeholder="······" name="Пароль" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
        </div>
        <FormKit v-model="user.phone" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
        <button type="submit" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white/5 h-8 text-[#0B0D17] text-center w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden group">
            <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Регистрация</span>
            <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Регистрация</span>
        </button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-white"></div>  
            <p class="font-semibold font-Cormorant tracking-widest text-white">или</p>
            <div class="w-1/3 h-px bg-white"></div>  
        </div>
        <NuxtLink to="/auth" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white h-8 text-white text-center w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden group">
            <span class="transition-all duration-700 bg-white/5 absolute inset-0 group-hover:-translate-x-full rounded-xl">Вход</span>
            <span class="absolute inset-0 text-[#0B0D17] transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Вход</span>
        </NuxtLink>
    </FormKit>
</template>

<script setup>
    /* создание пользователя */
    const user = ref({
        name: "",
        surname: "",
        patronymic: "",
        login: "",
        phone: "",
        password: ""
    })


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* подключение БД и роутера */
    const supabase = useSupabaseClient()
    const router = useRouter()


    /* регистрация пользователя */
    const regUser = async () => {
        const { data: users, error: usersError } = await supabase
        .from('users')
        .select("*")
        .eq('login', user.value.login)

        if (users[0]) {
            user.value.login = ""
            return showMessage("Такой  логин уже используется!", false)              
        } 

        const { data, error } = await supabase
        .from('users')
        .insert(user.value)
        .select()

        if (data) {
            console.log(data)
            showMessage('Успешная регистрация!', true)
            router.push('/auth')
        } else {
            showMessage('Произошла ошибка!', false)
        }
    }
</script>