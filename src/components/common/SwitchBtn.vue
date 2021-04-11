<template>
    <label class="switch-btn inline-flex flex-col items-center cursor-pointer text-xs normal-case font-normal tracking-normal">
        <input
            type="checkbox"
            class="switch-btn__input sr-only"
            :checked="modelValue"
            @change="$emit('update:modelValue', !modelValue)"
        />
        <span class="switch-btn__control block relative w-8 h-4 rounded-full overflow-hidden hover:shadow-inner">
            <span class="switch-btn__track block h-full " />
            <span class="switch-btn__dot absolute top-1 bottom-0 w-2 h-2 rounded-full transition-all" />
        </span>
        <span class="switch-btn__label opacity-80 font-medium whitespace-nowrap">
            {{ label }}
        </span>
    </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'SwitchBtn',
    props: {
        label: {
            type: String as PropType<string>,
            required: false,
            default: () => ''
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: () => false
        }
    },
    emits: {
        ['update:modelValue']: (payload: any) => typeof payload === 'boolean'
    }
})
</script>

<style scoped>

.switch-btn__input ~ .switch-btn__control .switch-btn__dot {
    @apply bg-white left-1 right-5;
}

.switch-btn__input ~ .switch-btn__control .switch-btn__track {
    @apply bg-gray-600;
}

.switch-btn__input:checked ~ .switch-btn__control .switch-btn__dot {
    @apply bg-green-600 left-5 right-1;
}

.switch-btn__input:checked ~ .switch-btn__control .switch-btn__track {
    @apply bg-gray-300;
}

</style>
