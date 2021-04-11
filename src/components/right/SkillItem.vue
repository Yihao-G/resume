<template>
    <div>
        <div class="text-sm whitespace-nowrap">
            <MdiIcon :icon="icon" size="1rem" class="mr-1" />
            <span>{{ name }}</span>
        </div>
        <div class="bg-white bg-opacity-50 h-1.5 mt-2 rounded-full border border-white border" :title="`${proficiency}%`">
            <div class="h-full rounded-full" :style="{ 'background-color': color, width: proficiency + '%' }" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MdiIcon from '../common/MdiIcon.vue'

export default defineComponent({
    name: 'SkillItem',
    components: { MdiIcon },
    props: {
        name: {
            type: String as PropType<string>,
            required: true
        },
        icon: {
            type: String as PropType<string>,
            required: true
        },
        color: {
            type: String as PropType<string>,
            required: true
        },
        proficiency: {
            type: Number as PropType<number>,
            required: true,
            validator: (value: number) => value >= 0 && value <= 100
        }
    }
})
</script>

<style scoped>

</style>
