<template>
    <section class="reference opacity-75 space-y-1">
        <p class="reference__title h-4" />
        <p class="reference__subtitle h-3" />
        <p class="reference__content h-4" />
        <p class="reference__contact-phone h-3" />
        <p class="reference__contact-email h-3" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ReferenceItem'
})
</script>

<style scoped>

.reference * {
    @apply bg-white rounded-full;
}

.reference__title {
    width: 15ch;
}

.reference__subtitle {
    width: 25ch;
}

.reference__content {
    width: 20ch;
}

.reference__contact-phone {
    width: 10ch;
}

.reference__contact-email {
    width: 18ch;
}

</style>
