<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <NuxtLink class="flex flex-col gap-4 rounded-xl border border-white/15 bg-white/5 p-4 group transition-all duration-500 hover:border-white" v-for="product in products">
            <img :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/products/${product.image}`" alt="" class="aspect-video object-cover rounded-xl transition-all duration-500 group-hover:scale-110">
            <p class="font-semibold text-2xl font-Cormorant tracking-widest md:min-h-16">{{ product.title }}</p>
            <p class="opacity-50 line-clamp-4">{{ product.desc.slice(0, 100) }}</p>
            <div class="flex flex-col gap-2">
                <p class="text-3xl font-semibold tracking-widest">{{ product.price.toLocaleString() }} <span class="text-4xl">⌬</span></p>
                <button type="submit" class="px-4 py-0.5 rounded-full transition-all duration-500 group-hover:bg-white h-8 text-white text-center w-[260px] font-Cormorant mx-auto uppercase relative overflow-hidden">
                    <span class="transition-all duration-700 bg-white/5 absolute inset-0 group-hover:-translate-x-full rounded-xl">Подробнее</span>
                    <span class="absolute inset-0 text-[#0B0D17] transition-all duration-700 translate-x-full group-hover:translate-x-0 z-[2]">Подробнее</span>
                </button>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    /* подключение БД */
    const supabase = useSupabaseClient() 

    const { data, error } = await supabase
    .from('products')
    .select('*')   
    .order('id', { ascending: true })

    const products = ref(data)
</script>