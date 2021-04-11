<template>
    <ResumeCore />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResumeCore from './components/ResumeCore.vue'

export default defineComponent({
    name: 'App',
    components: {
        ResumeCore
    }
})
</script>
