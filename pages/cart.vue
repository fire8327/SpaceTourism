<template>
    <div class="flex max-lg:flex-col gap-10" v-if="carts && carts.length>0">
        <div class="flex flex-col gap-6 lg:w-1/2">
            <p class="text-3xl tracking-widest font-semibold font-Cormorant">Список товаров</p>
            <div class="flex flex-col gap-8">
                <div class="flex flex-col gap-4 rounded-xl p-4 border border-white/15 bg-white/5 backdrop-blur-3xl" v-for="cart in carts">
                    <p class="text-2xl tracking-widest font-semibold font-Cormorant">{{ cart.products.title }}</p>
                    <NuxtLink :to="`/catalog/product-${cart.products.id}`" class="rounded-xl overflow-hidden group">
                        <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/products/${cart.products.image}`" alt="" class="transition-all duration-500 group-hover:scale-125 w-full aspect-video object-cover">
                    </NuxtLink>
                    <div class="text-4xl tracking-widest font-semibold font-Cormorant">{{ cart.products.price.toLocaleString() }} ₽</div>
                    <div class="flex items-center gap-2 md:w-1/2">
                        <div class="flex items-center justify-center gap-4 h-full px-4 rounded-xl border white w-1/2">
                            <button :disabled="cart.count<2" @click="minusCard(cart.count, cart.id), cart.count--" :class="{'text-gray-300' : cart.count<2}" class="text-2xl">-</button>
                            <p>{{ cart.count }}</p>
                            <button @click="plusCard(cart.count, cart.id), cart.count++" class="text-2xl">+</button>
                        </div>  
                        <button type="button" @click="deleteProduct(cart.id, carts.indexOf(cart))" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white h-8 text-white text-center w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden group">
                            <span class="transition-all duration-700 bg-white/5 absolute inset-0 group-hover:-translate-x-full rounded-xl">Удалить</span>
                            <span class="absolute inset-0 text-[#0B0D17] transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Удалить</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-6 lg:w-1/2">
            <p class="text-3xl tracking-widest font-semibold font-Cormorant">Оформление заказа</p>
            <FormKit type="form" @submit="makeOrder()" :actions="false" messages-class="hidden" form-class="flex flex-col gap-4 w-full items-center">
                <div class="flex items-start gap-2 w-full text-[#1B1B1B]">
                    <FormKit type="text" validation="required|number" messages-class="text-[#E9556D] font-Cormorant" name="Номер карты" outer-class="max-md:w-full md:w-2/4" input-class="px-4 py-2 rounded-xl focus:outline-none focus:border-white w-full border border-white/15 bg-white/5" placeholder="Номер карты"/>
                    <FormKit type="text" validation="required" messages-class="text-[#E9556D] font-Cormorant" name="Срок действия" outer-class="max-md:w-full md:w-1/4" input-class="px-4 py-2 rounded-xl focus:outline-none focus:border-white w-full border border-white/15 bg-white/5" placeholder="YY/YY"/>
                    <FormKit type="text" validation="required|number" messages-class="text-[#E9556D] font-Cormorant" name="CVC" outer-class="max-md:w-full md:w-1/4" input-class="px-4 py-2 rounded-xl focus:outline-none focus:border-white w-full border border-white/15 bg-white/5" placeholder="CVC"/>
                </div>
                <p class="text-2xl w-full font-semibold tracking-widest"><span class="font-Cormorant opacity-50">Итого: </span>{{ total.toLocaleString() }} ₽</p>
                <button type="submit" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white/5 h-8 text-[#0B0D17] text-center w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden group">
                    <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">Оформить</span>
                    <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Оформить</span>
                </button>
            </FormKit>
        </div>
    </div>
    <div v-else class="flex flex-col gap-6 p-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-3xl w-full h-fit self-center text-center items-center">
        <p class="text-3xl tracking-widest font-semibold font-Cormorant">Ваша корзина пуста</p>
        <p class="tracking-widest max-w-xl opacity-50">Кажется, вы еще не добавили товары в корзину. Не упустите шанс найти что-то особенное!</p>
        <NuxtLink to="/shop" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white/5 h-8 text-[#0B0D17] text-center w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden group">
            <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">В магазин</span>
            <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">В магазин</span>
        </NuxtLink>
    </div>
</template>

<script setup>
    /* проверка входа */
    const { id } = storeToRefs(useUserStore())


    /* создание сообщений */
    const showMessage = useMessagesStore().showMessage


    /* подключение к БД */
    const supabase = useSupabaseClient()     
    const { data:cart, error:cartError } = await supabase
    .from('cart')
    .select(`*, products (*)`)
    .eq('status', 'В корзине')
    .eq('userId', id.value)

    const carts = ref(cart)


    /* управление количеством и суммой */  
    const calculateTotal = () => {
        return carts.value.reduce((acc, { count, products: { price } }) => acc + count * price, 0)
    }
    const total = ref(calculateTotal())

    const updateCount = async (newCount, id) => {
        const { data, error } = await supabase
        .from('cart')
        .update({ count: newCount })
        .eq('id', id)
        .select()

        if(error) {
            showMessage("Произошла ошибка!", false)             
        } else {
            total.value = calculateTotal()
            showMessage("Количество обновлено!", true)  
        }
    }
    const plusCard = async (count, id) => {
        count++
        await updateCount(count, id)
    }
    const minusCard = async (count, id) => {
        if (count > 1) {
            count--
            await updateCount(count, id)
        }
    }


    /* удаление товара */
    const deleteProduct = async (idBase, idArray) => {
        const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', idBase)

        carts.value.splice(idArray, 1)

        if(error) {
            showMessage("Произошла ошибка!", false)             
        } else {
            showMessage("Удалено!", true)  
        }
    }


    /* оформление заказа и роутер */
    const router = useRouter()
    const makeOrder = async () => {
        const { data, error } = await supabase
        .from('cart')
        .update({ status: 'Оформлен' })
        .eq('status', 'В корзине')
        .eq('userId', id.value)
        .select() 

        if(error) {
            showMessage("Произошла ошибка!", false)             
        } else {
            showMessage("Заказ успешно оформлен!", true)  
            router.push("/")
        }     
    } 
</script>