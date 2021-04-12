<template>
    <svg viewBox="0 0 24 24" class="fill-current inline" :style="{ width: sizeString, height: sizeString }">
        <path v-if="iconPath" :d="iconPath" />
    </svg>
</template>

<script lang="ts">
import { defineComponent, toRefs, watch, ref, Ref, computed, PropType } from 'vue'
import { toPascalCase } from '../../utils/convertStringCase'
import { toStringSize } from '../../utils/toStringSize'

export default defineComponent({
    name: 'MdiIcon',
    props: {
        icon: {
            type: String as PropType<string>,
            required: true
        },
        size: {
            type: [String, Number] as PropType<string | number>,
            required: false,
            default: () => '24px'
        }
    },
    setup(props) {
        const { icon, size } = toRefs(props)

        const iconPath: Ref<string | null> = ref(null)

        watch(icon, async() => {
            const { default: svg } = await import(`../../../node_modules/mdi-es/dist/mdi${toPascalCase(icon.value)}.js`)
            iconPath.value = svg
        }, { immediate: true })

        const sizeString = computed(() => toStringSize(size.value))

        return { iconPath, sizeString }
    }
})
</script>

<style scoped>

</style>
