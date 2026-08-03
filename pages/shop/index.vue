<template>
    <div class="flex flex-col gap-8">
        <SectionTitle title="Космический магазин" subtitle="Сувениры и снаряжение для вашего путешествия" />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <NuxtLink
                :to="`/shop/product-${product.id}`"
                class="glass-card !p-0 overflow-hidden group"
                v-for="product in products"
                :key="product.id"
            >
                <div class="overflow-hidden">
                    <img
                        :src="`https://kruhlafaexwyzkfbdwki.supabase.co/storage/v1/object/public/images/products/${product.image}`"
                        alt=""
                        class="aspect-[4/3] object-cover w-full transition-transform duration-500 group-hover:scale-105"
                    >
                </div>
                <div class="p-5 flex flex-col gap-2">
                    <p class="font-display text-lg line-clamp-2">{{ product.title }}</p>
                    <p class="text-body text-sm line-clamp-2">{{ product.desc.slice(0, 80) }}...</p>
                    <div class="flex items-center justify-between mt-2">
                        <p class="stat-value text-xl">{{ product.price.toLocaleString() }} ⌬</p>
                        <span class="text-xs text-space-accent opacity-0 group-hover:opacity-100 transition-opacity">Подробнее →</span>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const { data } = await supabase.from('products').select('*').order('id', { ascending: true })
const products = ref(data)
</script>
