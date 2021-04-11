<template>
    <div class="container min-h-full mx-auto p-6 font-sans flex flex-col justify-center">
        <main class="flex flex-wrap shadow-lg rounded-md overflow-hidden">
            <ResumeLeft class="flex-grow flex-basis-1/3" />
            <ResumeRight class="flex-grow flex-basis-2/3" />
            <ExperienceList class="w-full" />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResumeLeft from './left/ResumeLeft.vue'
import ResumeRight from './right/ResumeRight.vue'
import ExperienceList from './experience/ExperienceList.vue'

export default defineComponent({
    name: 'ResumeCore',
    components: { ExperienceList, ResumeRight, ResumeLeft }
})
</script>

<style scoped>

</style>
