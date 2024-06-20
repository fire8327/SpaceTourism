<template>
    <div class="flex max-lg:flex-col gap-6">
        <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/products/${data[0].image}`" alt="" class="aspect-video object-cover rounded-xl w-full lg:w-1/2">
        <div class="flex flex-col gap-6 w-full lg:w-1/2">
            <p class="font-semibold text-2xl font-Cormorant tracking-widest md:min-h-16">{{ data[0].title }}</p>
            <p class="opacity-50">{{ data[0].desc }}</p>
            <div class="flex flex-col md:gap-2 gap-6 w-full">
                <div class="flex max-md:flex-col items-center gap-2" v-for="(value, key) in data[0].features">
                    <p class="first-letter:capitalize">{{ key }}</p>
                    <p class="w-px h-6 border-l md:min-w-[50%] md:grow md:h-px md:border-b border-white/15 border-dashed"></p>
                    <p class="first-letter:capitalize opacity-50">{{ value }}</p>
                </div>
            </div>
            <p><span class="text-2xl font-Cormorant">Срок доставки:</span> <span class="opacity-50">{{ data[0].deliveryTime }}</span></p>
            <p class="text-3xl font-semibold tracking-widest">{{ data[0].price.toLocaleString() }} <span class="text-4xl">⌬</span></p>
            <button @click="addCart()" v-if="authenticated" type="button" class="px-4 py-0.5 rounded-full transition-all duration-500 hover:bg-white/5 h-8 text-[#0B0D17] text-center w-[260px] font-Cormorant uppercase relative overflow-hidden group">
                <span class="transition-all duration-700 bg-white absolute inset-0 group-hover:-translate-x-full rounded-xl">В корзину</span>
                <span class="absolute inset-0 text-white transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">В корзину</span>
            </button>
            <p v-else class="text-base font-semibold tracking-widest font-Cormorant opacity-50">* для покупки товара войдите в аккаунт</p>
        </div>
    </div>
</template>

<script setup>
    /* подключение БД и роут */
    const supabase = useSupabaseClient() 
    const route = useRoute()

    const { data, error } = await supabase
    .from('products')
    .select('*')   
    .eq('id', route.params.id)


    /* проверка входа */
    const { authenticated, id } = storeToRefs(useUserStore())


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* добавление в корзину */
    const addCart = async () => {
        const { data: carts } = await supabase
        .from('cart')
        .select(`*`)
        .eq('status', 'В корзине')
        .eq('userId', id.value)
        .eq('productId', route.params.id)

        if(carts && carts.length>0) {
            await supabase
            .from('cart')
            .update({ count: `${Number(carts[0].count)+1}` })
            .eq('status', 'В корзине')
            .eq('userId', id.value)
            .eq('productId', route.params.id)
            .select()      
        
            showMessage("Количество обновлено!", true)   
        } else {            
            const { data, error } = await supabase
            .from('cart')
            .insert([
                { userId: id.value, productId: route.params.id, status: 'В корзине', count: 1 },
            ])
            .select()       
            
            if(error) {
                showMessage("Произошла ошибка!", false)   
            } else {
                showMessage("Добавлено в корзину!", true)   
            }            
        }
    }
</script>