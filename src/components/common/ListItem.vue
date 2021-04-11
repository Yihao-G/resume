<template>
    <li class="flex" :title="hideTitle ? title : undefined">
        <div class="self-start mr-2">
            <MdiIcon :icon="icon" />
        </div>
        <div>
            <div v-if="!hideTitle" class="font-medium">{{ title }}</div>
            <component
                :is="valueTag"
                v-bind="valueElAttrs"
                class="block text-gray-300 text-sm"
            >
                {{ value }}
                <span v-if="note" class="italic opacity-60">
                    ({{ note }})
                </span>
            </component>
        </div>
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import MdiIcon from './MdiIcon.vue'


export default defineComponent({
    name: 'ListItem',
    components: { MdiIcon },
    props: {
        title: {
            type: String as PropType<string>,
            required: true
        },
        hideTitle: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: () => false
        },
        value: {
            type: String as PropType<string>,
            required: true
        },
        icon: {
            type: String as PropType<string>,
            required: true
        },
        note: {
            type: String as PropType<string>,
            required: false
        },
        link: {
            type: String as PropType<string>,
            required: false
        }
    },
    setup(props) {
        const valueElAttrs = computed(() => props.link ? {
            href: props.link,
            target: '_blank',
            rel: 'nofollow'
        } : {})

        const valueTag = computed(() => props.link ? 'a' : 'div')

        return { valueElAttrs, valueTag }
    }
})
</script>

<style scoped>

</style>
