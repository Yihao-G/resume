<template>
    <div class="hidden print:block text-center mb-2">
        To view the full version and get a better experience, please visit
        <a href="https://resume.yihao.moe" class="text-blue-700">resume.yihao.moe</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MdiIcon from '../common/MdiIcon.vue'

export default defineComponent({
    name: 'ResumeHeader',
    components: { MdiIcon }
})
</script>

<style scoped>

</style>
