<template>
    <section>
        <h1 class="p-1 text-xl font-light uppercase tracking-widest">
            <slot name="title" />
        </h1>
        <hr class="m-1 mb-2" :class="{ 'w-20': shortDivider }" />
        <article class="px-1">
            <slot name="content" />
        </article>
    </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'SectionContainer',
    props: {
        shortDivider: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: () => false
        }
    }
})
</script>

<style scoped>

</style>
