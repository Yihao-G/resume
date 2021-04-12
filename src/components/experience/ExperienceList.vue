<template>
    <SectionContainer class="bg-white pt-2 px-3.5" short-divider>
        <template #title>
            <div class="flex items-center">
                <div>
                    {{ showVolunteer ? 'Volunteer &' : '' }}
                    Employment
                </div>
                <div class="flex-grow" />
                <span>
                    <SwitchBtn v-model="showVolunteer" label="Volunteer" />
                </span>
            </div>
        </template>
        <template #content>
            <div class="sm:text-center space-y-3">
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
            <TimelineDisplay :items="employmentItems" class="mb-2" y-margin="1rem">
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
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import SectionContainer from '../common/SectionContainer.vue'
import SwitchBtn from '../common/SwitchBtn.vue'
import TimelineDisplay, { TimelineItem } from '../common/TimelineDisplay.vue'
import EmploymentJson from '../../data/employment.json'
import ExpandableSectionContainer from '../common/ExpandableSectionContainer.vue'
import MdiIcon from '../common/MdiIcon.vue'

export default defineComponent({
    name: 'ExperienceList',
    components: { MdiIcon, ExpandableSectionContainer, TimelineDisplay, SwitchBtn, SectionContainer },
    setup() {
        const showVolunteer = ref(true)

        const employmentItems: ComputedRef<TimelineItem[]> = computed(() =>
            EmploymentJson
                .filter(employment => showVolunteer.value || !employment.isVolunteer)
                .map(item => ({
                    ...item,
                    key: Symbol(item.title),
                    sideText: item.period
                }))
        )

        return { showVolunteer, employmentItems }
    }
})
</script>

<style scoped>

</style>
