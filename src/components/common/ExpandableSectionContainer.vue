<template>
    <details class="section divide-y divide-blue-500" ref="detailsEl">
        <summary class="header group list-none flex items-center outline-none py-3 px-4 cursor-pointer">
            <span class="block">
                <slot name="summary" />
            </span>
            <span class="block flex-grow" />
            <span class="block">
                <MdiIcon
                    icon="chevron-down"
                    class="header__chevron opacity-70 group-hover:opacity-100 transition-all"
                />
            </span>
        </summary>
        <div class="content py-3 px-4">
            <slot />
        </div>
    </details>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import MdiIcon from './MdiIcon.vue'
import { Accordion } from '../../utils/Accordion'

export default defineComponent({
    name: 'ExpandableSectionContainer',
    components: { MdiIcon },
    setup() {
        let accordion: Accordion | null = null
        const detailsEl = ref(null as HTMLDetailsElement | null)


        onMounted(() => {
            if (detailsEl.value) {
                accordion = new Accordion(detailsEl.value)
            }
        })

        onBeforeUnmount(() => {
            accordion?.dispose()
        })

        return { detailsEl }
    }
})
</script>

<style scoped>

.section[open] .header__chevron {
    @apply transform rotate-180 opacity-100;
}

</style>
