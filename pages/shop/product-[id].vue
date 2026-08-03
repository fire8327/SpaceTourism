<template>
    <div class="flex max-lg:flex-col gap-10 lg:gap-16">
        <div class="w-full lg:w-1/2 overflow-hidden rounded-2xl">
            <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/products/${data[0].image}`" alt="" class="aspect-square object-cover w-full">
        </div>
        <div class="flex flex-col gap-6 w-full lg:w-1/2">
            <div>
                <p class="section-label">Товар</p>
                <h1 class="font-display text-3xl md:text-4xl font-light">{{ data[0].title }}</h1>
            </div>
            <p class="text-body">{{ data[0].desc }}</p>

            <div class="glass-panel flex flex-col gap-3 !p-4">
                <div class="flex items-center justify-between text-sm" v-for="(value, key) in data[0].features" :key="key">
                    <span class="capitalize text-white/60">{{ key }}</span>
                    <span class="capitalize">{{ value }}</span>
                </div>
            </div>

            <p class="text-sm"><span class="text-white/50">Срок доставки:</span> {{ data[0].deliveryTime }}</p>
            <p class="stat-value text-3xl">{{ data[0].price.toLocaleString() }} ⌬</p>

            <UiButton v-if="authenticated" @click="addCart()">В корзину</UiButton>
            <p v-else class="text-xs text-white/40">Для покупки войдите в аккаунт</p>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const route = useRoute()
const { data } = await supabase.from('products').select('*').eq('id', route.params.id)
const { authenticated, id } = storeToRefs(useUserStore())
const { showMessage } = useMessagesStore()

const addCart = async () => {
    const { data: carts } = await supabase.from('cart').select('*').eq('status', 'В корзине').eq('userId', id.value).eq('productId', route.params.id)

    if (carts && carts.length > 0) {
        await supabase.from('cart').update({ count: `${Number(carts[0].count) + 1}` }).eq('status', 'В корзине').eq('userId', id.value).eq('productId', route.params.id).select()
        showMessage('Количество обновлено!', true)
    } else {
        const { error } = await supabase.from('cart').insert([{ userId: id.value, productId: route.params.id, status: 'В корзине', count: 1 }]).select()
        if (error) showMessage('Произошла ошибка!', false)
        else showMessage('Добавлено в корзину!', true)
    }
}
</script>
