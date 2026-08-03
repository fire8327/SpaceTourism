<template>
    <div class="flex flex-col gap-8">
        <SectionTitle title="Галерея" subtitle="Моменты из наших космических экспедиций" />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div v-for="n in 12" :key="n" class="overflow-hidden rounded-2xl group">
                <img
                    :src="`/images/gallery/${n}.jpg`"
                    alt=""
                    class="aspect-[4/3] object-cover w-full transition-transform duration-500 group-hover:scale-105"
                >
            </div>
        </div>
    </div>
</template>
