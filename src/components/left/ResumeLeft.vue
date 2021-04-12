<template>
    <section
        class="text-white bg-gray-700 px-2 py-6 px-3.5 space-y-1.5"
    >
        <AvatarArea />
        <SectionContainer>
            <template #title>
                Info
            </template>
            <template #content>
                <ul class="space-y-1.5">
                    <ListItem
                        v-for="{ title, value, link, icon } in info"
                        :key="title"
                        :title="title"
                        :value="value"
                        :link="link"
                        :icon="icon"
                    />
                </ul>
            </template>
        </SectionContainer>
        <SectionContainer>
            <template #title>
                Socials
            </template>
            <template #content>
                <ul class="space-y-2.5">
                    <ListItem
                        v-for="{ title, value, note, link, icon } in socials"
                        :key="title"
                        :title="title"
                        :value="value"
                        :note="note"
                        :link="link"
                        :icon="icon"
                        hide-title
                    />
                </ul>
            </template>
        </SectionContainer>
        <SectionContainer>
            <template #title>
                References
            </template>
            <template #content>
                <div class="relative">
                    <ul class="flex justify-between flex-wrap gap-2">
                        <li v-for="i in 2" :key="i">
                            <ReferenceItem />
                        </li>
                    </ul>
                    <div class="references__overlay">
                        <p class="italic opacity-80 px-3 text-center">
                            References available upon request
                        </p>
                    </div>
                </div>
            </template>
        </SectionContainer>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AvatarArea from './AvatarArea.vue'
import SectionContainer from '../common/SectionContainer.vue'
import MdiIcon from '../common/MdiIcon.vue'
import InfoJson from '../../data/info.json'
import SocialsJson from '../../data/socials.json'
import ListItem from '../common/ListItem.vue'
import ReferenceItem from './ReferenceItem.vue'

export default defineComponent({
    name: 'ResumeLeft',
    components: { ReferenceItem, ListItem, MdiIcon, AvatarArea, SectionContainer },
    setup() {
        return { info: InfoJson, socials: SocialsJson }
    }
})
</script>

<style scoped>

.references__overlay {
    @apply absolute -inset-1.5 bg-gray-700 bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-md flex justify-center items-center print:items-start print:top-0;
}

</style>
