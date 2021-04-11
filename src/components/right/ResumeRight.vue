<template>
    <section
        class="section"
    >
        <SectionContainer short-divider>
            <template #title>
                Who am I?
            </template>
            <template #content>
                <p v-for="whoAmIText in whoAmITextLines" :key="whoAmIText" class="text-justify hyphens-auto">
                    {{ whoAmIText }}
                </p>
            </template>
        </SectionContainer>
        <SectionContainer short-divider>
            <template #title>
                What am I proud about myself?
            </template>
            <template #content>
                <ul class="space-y-2.5">
                    <ListItem
                        v-for="{ title, value, icon } in proudAboutMyselfItems"
                        :key="title"
                        :title="title"
                        :value="value"
                        :icon="icon"
                    />
                </ul>
            </template>
        </SectionContainer>
        <SectionContainer short-divider>
            <template #title>
                Skills
            </template>
            <template #content>
                <ul class="skills grid">
                    <li v-for="{ name, icon, color, proficiency } in skills" :key="name">
                        <SkillItem
                            :name="name"
                            :icon="icon"
                            :color="color"
                            :proficiency="proficiency"
                        />
                    </li>
                </ul>
            </template>
        </SectionContainer>

        <SectionContainer short-divider>
            <template #title>
                Education
            </template>
            <template #content>
                <table class="max-w-full">
                    <tr v-for="{ degree, institution, period, achievements } in education" :key="degree">
                        <td class="whitespace-nowrap align-top pr-2">
                            {{ period }}
                        </td>
                        <td>
                            <div class="font-bold">{{ degree }}</div>
                            <div class="font-thin text-sm italic">{{ institution }}</div>
                            <ul class="list-disc list-inside text-sm">
                                <li v-for="achievement in achievements" :key="achievement">
                                    {{ achievement }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </template>
        </SectionContainer>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionContainer from '../common/SectionContainer.vue'
import { text as WhoAmIText } from '../../data/who-am-i.json'
import ProudAboutMyselfJson from '../../data/proud-about-myself.json'
import ListItem from '../common/ListItem.vue'
import SkillItem from './SkillItem.vue'
import SkillsJson from '../../data/skills.json'
import EducationJson from '../../data/education.json'

export default defineComponent({
    name: 'ResumeRight',
    components: { SkillItem, ListItem, SectionContainer },
    setup() {
        return {
            whoAmITextLines: WhoAmIText.split(/\r\n|\r|\n/),
            proudAboutMyselfItems: ProudAboutMyselfJson,
            skills: SkillsJson,
            education: EducationJson
        }
    }
})

</script>

<style scoped>

.section {
    @apply bg-blue-500 bg-opacity-70 text-white backdrop-filter backdrop-brightness-50 backdrop-blur-sm py-2 px-3.5 space-y-3;
}

.skills {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    @apply gap-2;
}

</style>
