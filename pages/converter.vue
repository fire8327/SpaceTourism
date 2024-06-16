<template>
    <div class="flex flex-col gap-6">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Конвертер валют</p>
        <div class="flex max-lg:flex-col gap-8 items-center lg:items-end">
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <div class="flex flex-col gap-2">
                    <p class="opacity-50">У меня есть</p>
                    <div class="flex items-center gap-2">
                        <button class="rounded-xl px-4 py-2 border border-white/15">USD</button>
                        <button class="rounded-xl px-4 py-2 border border-white/15">EUR</button>
                        <button class="rounded-xl px-4 py-2 border border-white/15">RUB</button>
                    </div>
                </div>
                <div class="flex flex-col gap-2 rounded-xl p-4 bg-white/5 border border-white/15">
                    <input type="text" class="w-full rounded-xl border border-white/15 bg-transparent px-4 py-2 text-6xl">
                    <p class="opacity-50">1 USD = 21312312 RUB</p>
                </div>
            </div>
            <Icon class="text-5xl max-lg:rotate-90 lg:mb-16" name="tabler:arrows-exchange-2"/>
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <div class="flex flex-col gap-2">
                    <p class="opacity-50">Хочу приобрести</p>
                    <div class="flex items-center gap-2">
                        <button class="rounded-xl px-4 py-2 border border-white/15">USD</button>
                        <button class="rounded-xl px-4 py-2 border border-white/15">EUR</button>
                        <button class="rounded-xl px-4 py-2 border border-white/15">RUB</button>
                    </div>
                </div>
                <div class="flex flex-col gap-2 rounded-xl p-4 bg-white/5 border border-white/15">
                    <input type="text" class="w-full rounded-xl border border-white/15 bg-transparent px-4 py-2 text-6xl">
                    <p class="opacity-50">1 RUB = 21312312 USD</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>