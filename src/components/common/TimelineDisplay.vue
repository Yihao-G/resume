<template>
    <ul class="timeline">
        <li
            v-for="(item, i) in items"
            :key="item.key"
            class="timeline__item"
            :class="`timeline__item--${i % 2 === 0 ? 'left' : 'right'}`"
        >
            <span class="timeline__item-side-text">
                {{ item.sideText }}
            </span>
            <div class="timeline__item-content">
                <slot :name="item.key" v-bind="item" />
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface TimelineItem {
    key: string | number
    sideText?: string
}

export default defineComponent({
    name: 'TimelineDisplay',
    props: {
        items: {
            type: Array as PropType<readonly TimelineItem[]>,
            required: true
        }
    }
})
</script>

<style scoped lang="scss">

.timeline {
    @apply relative space-y-5;

    // the line of the timeline
    &::after {
        content: '';
        @apply absolute bg-blue-600 w-0.5 left-4 inset-y-0;
        @screen screen {
            @screen sm {
                @apply inset-x-0 mx-auto;
            }
        }
    }

    &__item {
        width: calc(100% - 1.5rem);
        @apply relative left-4 pl-8 pt-6;

        &-side-text {
            right: calc(100% + 1rem);
            @apply absolute top-1 text-sm whitespace-nowrap leading-none left-10;
        }

        &-content {
            @apply bg-blue-600 rounded-md text-white shadow-md;
        }

        // the dot on the timeline
        &::before {
            content: '';
            left: calc(-0.5rem + 0.125rem / 2);
            top: calc(0.25rem + 1rem + 1.25rem);
            @apply absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full z-20 right-auto;
        }

        // the bar to connect dot and content
        &::after {
            content: '';
            height: 2px;
            top: calc(0.25rem + 1rem + 1.25rem + 1rem / 2 - 1px);
            @apply absolute w-8 bg-blue-600 left-0 z-10;
        }

        @screen screen {
            @screen sm {
                @apply w-1/2 pt-0;

                &-side-text {
                    top: calc(0.25rem + 1rem);
                }

                &::before {
                    top: calc(0.25rem + 1rem);
                }

                &::after {
                    top: calc(0.25rem + 1rem + 1rem / 2 - 1px);
                }

                &--left {
                    @apply left-0 pl-0 pr-8;

                    &::before {
                        @apply -right-2 left-auto;
                    }

                    &::after {
                        @apply right-0 left-auto;
                    }

                    .timeline__item-side-text {
                        left: calc(100% + 1rem);
                        @apply right-auto;
                    }
                }

                &--right {
                    @apply left-1/2 pl-8 pr-0;

                    &::before {
                        @apply -left-2 right-auto;
                    }

                    &::after {
                        @apply left-0 right-auto;
                    }

                    .timeline__item-side-text {
                        right: calc(100% + 1rem);
                        @apply left-auto;
                    }
                }
            }
        }
    }
}

</style>
