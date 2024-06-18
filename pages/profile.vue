<template>
     <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold"><span class="text-white/50">01</span> Личные данные</p>
        <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
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
            <FormKit v-model="user.email" validation="required|email" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Email" name="Email" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white"/>
            <button type="submit" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white/5 h-8 text-[#0B0D17] text-center w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden group">
                <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Обновить</span>
                <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Обновить</span>
            </button>
        </FormKit>
    </div>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold"><span class="text-white/50">03</span> Выход из аккаунта</p>
        <button @click="logout()" type="button" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white/5 h-8 text-[#0B0D17] text-center w-[260px] font-Cormorant uppercase relative overflow-hidden group">
            <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Выход</span>
            <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Выход</span>
        </button>
    </div>
</template>

<script setup>
    /* подключение БД и проверка пользователя */
    const supabase = useSupabaseClient() 
    const { authenticated, role, id } = storeToRefs(useUserStore())

    const { data:users, error } = await supabase
    .from('users')
    .select('*')   
    .eq('id', id.value)  


    /* создание сообщений и роутера */
    const { showMessage } = useMessagesStore()
    const router = useRouter()


    /* создание формы пользователя и изображений */
    const user = ref({
        name: users[0].name,
        surname: users[0].surname,
        patronymic: users[0].patronymic,
        login: users[0].login,
        email: users[0].email,
        phone: users[0].phone,
        password: users[0].password
    }) 


    /* обновление данных */
    const updateUser = async () => {    
        const { data, error } = await supabase
        .from('users')
        .update(user.value)
        .eq('id', id.value)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные обновлены!", true)   
        }
    }


    /* выход из аккаунта */
    const { logout } = useUserStore()
</script>