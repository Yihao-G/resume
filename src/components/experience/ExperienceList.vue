<template>
    <SectionContainer class="bg-white pt-2 px-3.5" short-divider>
        <template #title>
            <div class="flex items-center">
                <div>
                    {{ showVolunteer ? 'Volunteer &' : '' }}
                    Employment
                </div>
                <div class="flex-grow" />
                <span class="print:hidden">
                    <SwitchBtn v-model="showVolunteer" label="Volunteer" />
                </span>
            </div>
        </template>
        <template #content>
            <div class="sm:text-center print:text-left space-y-3">
                <p class="font-serif text-xl italic">Let's build our future together</p>
                <p>
                    <a
                        class="py-2 px-4 text-lg bg-blue-600 hover:bg-blue-700 text-white transition-all font-bold rounded-md inline-block"
                        href="mailto:contact@yihao.moe"
                    >
                        Hire Me
                    </a>
                </p>
            </div>
            <TimelineDisplay :items="employmentItems" class="py-4">
                <template
                    v-for="{ key, title, company, subtitle, isVolunteer, openByDefault, achievements } in employmentItems"
                    #[key]
                >
                    <ExpandableSectionContainer :open="openByDefault">
                        <template #summary>
                            <h1 class="font-bold flex items-center">
                                <span>{{ title }}</span>
                                <MdiIcon
                                    v-if="isVolunteer"
                                    icon="hand-heart"
                                    :size="16"
                                    class="ml-1"
                                    title="Volunteer"
                                />
                            </h1>
                            <h2 class="text-xs">{{ company }}</h2>
                            <h2 class="text-xs">{{ subtitle }}</h2>
                        </template>
                        <ul class="text-sm list-disc list-inside space-y-2">
                            <li v-for="achievement in achievements" :key="achievement">
                                {{ achievement }}
                            </li>
                        </ul>
                    </ExpandableSectionContainer>
                </template>
            </TimelineDisplay>
        </template>
    </SectionContainer>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import SectionContainer from '../common/SectionContainer.vue'
import SwitchBtn from '../common/SwitchBtn.vue'
import TimelineDisplay, { TimelineItem } from '../common/TimelineDisplay.vue'
import EmploymentJson from '../../data/employment.json'
import ExpandableSectionContainer from '../common/ExpandableSectionContainer.vue'
import MdiIcon from '../common/MdiIcon.vue'

type ExperienceTimelineItem = TimelineItem & {
    title: string
    company: string
    subtitle?: string
    isVolunteer: boolean
    openByDefault: boolean
    achievements: string[]
}

export default defineComponent({
    name: 'ExperienceList',
    components: { MdiIcon, ExpandableSectionContainer, TimelineDisplay, SwitchBtn, SectionContainer },
    setup() {
        const showVolunteer = ref(true)
        const employmentItems: ComputedRef<ExperienceTimelineItem[]> = computed(() =>
            EmploymentJson
                .filter(employment => showVolunteer.value || !employment.isVolunteer)
                .map(item => ({
                    ...item,
                    key: item.title + '-' + item.company,
                    sideText: item.period
                }))
        )

        const mediaQueryList = window.matchMedia('print')

        function onPrinterMediaChanged() {
            showVolunteer.value = mediaQueryList.matches ? false : showVolunteer.value
            console.log('changed!', showVolunteer)
        }

        onMounted(() => {
            mediaQueryList.addEventListener('change', onPrinterMediaChanged)
        })
        onBeforeUnmount(() => {
            mediaQueryList.removeEventListener('change', onPrinterMediaChanged)
        })


        return { showVolunteer, employmentItems }
    }
})
</script>

<style scoped>

</style>
