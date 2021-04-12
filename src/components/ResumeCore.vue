<template>
    <div class="container min-h-full mx-auto p-6 font-sans flex flex-col justify-center">
        <ResumeHeader class="break-after-avoid-page" />
        <main class="shadow-lg rounded-md overflow-hidden">
            <div class="flex flex-wrap break-inside-avoid-page">
                <ResumeLeft class="flex-grow flex-basis-1/3 print:w-1/3" />
                <ResumeRight class="flex-grow flex-basis-2/3 print:w-2/3" />
            </div>
            <ExperienceList class="w-full break-before-page break-inside-avoid-page" />
        </main>
        <ResumeFooter class="break-before-avoid-page break-after-avoid-page" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResumeLeft from './left/ResumeLeft.vue'
import ResumeRight from './right/ResumeRight.vue'
import ExperienceList from './experience/ExperienceList.vue'
import MdiIcon from './common/MdiIcon.vue'
import ResumeFooter from './header-footer/ResumeFooter.vue'
import ResumeHeader from './header-footer/ResumeHeader.vue'

export default defineComponent({
    name: 'ResumeCore',
    components: { ResumeHeader, ResumeFooter, MdiIcon, ExperienceList, ResumeRight, ResumeLeft }
})
</script>

<style scoped>

</style>
