<template>
    <div class="px-4 text-center">
        <img src="/src/assets/avatar.jpg" alt="Yihao Gao's profile photo" class="w-32 h-32 rounded-full mx-auto" />
        <h1 class="my-3 text-3xl">
            <span class="font-medium">Yihao</span>
            <span>&nbsp;</span>
            <span class="text-blue-500 font-bold">Gao</span>
        </h1>
        <h2 class="text-md">
            <span class="print:whitespace-nowrap">Resolve problems</span>
            &
            <span class="print:whitespace-nowrap">Create value</span>
        </h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AvatarArea',
    components: {}
})
</script>

<style scoped>

</style>
