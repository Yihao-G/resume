<template>
    <div class="mt-2 text-center text-sm text-white print:text-black">
        <!-- @formatter:off -->
        Built by Yihao with <MdiIcon icon="heart" size="0.875rem" class="text-red-600" />,
        powered by
        <a href="https://v3.vuejs.org/" rel="nofollow" target="_blank" class="underline">Vue 3</a>,
        <a href="https://vitejs.dev/" rel="nofollow" target="_blank" class="underline">Vite</a> &
        <a href="https://www.typescriptlang.org/" rel="nofollow" target="_blank" class="underline">TypeScript</a>,
        open-sourced on
        <MdiIcon icon="github" size="0.875rem" />
        <a href="https://github.com/Yihao-G/resume" target="_blank" class="underline">GitHub</a>.
        <!-- @formatter:on -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MdiIcon from '../common/MdiIcon.vue'

export default defineComponent({
    name: 'ResumeFooter',
    components: { MdiIcon }
})
</script>

<style scoped>

</style>
