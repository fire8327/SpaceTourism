<template>
    <div class="flex max-lg:flex-col gap-10" v-if="carts && carts.length > 0">
        <div class="flex flex-col gap-6 lg:w-1/2">
            <SectionTitle title="Список товаров" />
            <div class="flex flex-col gap-4">
                <div class="glass-card !p-0 overflow-hidden group" v-for="cart in carts" :key="cart.id">
                    <NuxtLink :to="`/shop/product-${cart.products.id}`" class="block overflow-hidden">
                        <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/products/${cart.products.image}`" alt="" class="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-105">
                    </NuxtLink>
                    <div class="p-5 flex flex-col gap-3">
                        <p class="font-display text-xl">{{ cart.products.title }}</p>
                        <p class="stat-value text-2xl">{{ cart.products.price.toLocaleString() }} ⌬</p>
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-4 px-4 py-2 rounded-xl border border-white/[0.08]">
                                <button :disabled="cart.count < 2" @click="minusCard(cart.count, cart.id); cart.count--" :class="{ 'text-white/20': cart.count < 2 }" class="text-lg w-6">−</button>
                                <span class="text-sm w-4 text-center">{{ cart.count }}</span>
                                <button @click="plusCard(cart.count, cart.id); cart.count++" class="text-lg w-6">+</button>
                            </div>
                            <UiButton variant="ghost" size="sm" @click="deleteProduct(cart.id, carts.indexOf(cart))">Удалить</UiButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-6 lg:w-1/2">
            <SectionTitle title="Оформление заказа" />
            <FormKit type="form" @submit="makeOrder()" :actions="false" messages-class="hidden" form-class="glass-panel flex flex-col gap-4">
                <div class="flex flex-col sm:flex-row gap-3">
                    <FormKit type="text" validation="required|number" messages-class="text-red-400 text-xs" name="Номер карты" outer-class="sm:w-2/4 w-full" input-class="input-field" placeholder="Номер карты"/>
                    <FormKit type="text" validation="required" messages-class="text-red-400 text-xs" name="Срок действия" outer-class="sm:w-1/4 w-full" input-class="input-field" placeholder="MM/YY"/>
                    <FormKit type="text" validation="required|number" messages-class="text-red-400 text-xs" name="CVC" outer-class="sm:w-1/4 w-full" input-class="input-field" placeholder="CVC"/>
                </div>
                <div class="divider"></div>
                <p class="text-lg"><span class="text-white/50">Итого:</span> <span class="font-display text-2xl">{{ total.toLocaleString() }} ⌬</span></p>
                <UiButton type="submit" class="self-start">Оформить</UiButton>
            </FormKit>
        </div>
    </div>

    <div v-else class="glass-panel flex flex-col gap-4 items-center justify-center text-center py-12">
        <p class="font-display text-2xl font-light">Корзина пуста</p>
        <p class="text-body text-sm max-w-sm">Добавьте товары из нашего космического магазина.</p>
        <UiButton to="/shop" variant="outline">В магазин</UiButton>
    </div>
</template>

<script setup>
const { id } = storeToRefs(useUserStore())
const showMessage = useMessagesStore().showMessage
const supabase = useSupabaseClient()
const router = useRouter()

const { data: cart } = await supabase.from('cart').select('*, products (*)').eq('status', 'В корзине').eq('userId', id.value)
const carts = ref(cart)

const calculateTotal = () => carts.value.reduce((acc, { count, products: { price } }) => acc + count * price, 0)
const total = ref(calculateTotal())

const updateCount = async (newCount, cartId) => {
    const { error } = await supabase.from('cart').update({ count: newCount }).eq('id', cartId).select()
    if (error) showMessage('Произошла ошибка!', false)
    else { total.value = calculateTotal(); showMessage('Количество обновлено!', true) }
}

const plusCard = async (count, cartId) => { count++; await updateCount(count, cartId) }
const minusCard = async (count, cartId) => { if (count > 1) { count--; await updateCount(count, cartId) } }

const deleteProduct = async (idBase, idArray) => {
    const { error } = await supabase.from('cart').delete().eq('id', idBase)
    carts.value.splice(idArray, 1)
    if (error) showMessage('Произошла ошибка!', false)
    else showMessage('Удалено!', true)
}

const makeOrder = async () => {
    const { error } = await supabase.from('cart').update({ status: 'Оформлен' }).eq('status', 'В корзине').eq('userId', id.value).select()
    if (error) showMessage('Произошла ошибка!', false)
    else { showMessage('Заказ успешно оформлен!', true); router.push('/') }
}
</script>
