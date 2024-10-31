<template>
    <div>
        <h2>Ooopss... We found an Error</h2>
        <slot />
    </div>
</template>

<script>

import {lifecycleLoggerMixin} from "@/mixins/lifecycleLoggerMixin";

export default {
    name: "AppErrorLayout",
    mixins: [lifecycleLoggerMixin]
}
</script>

<style scoped>

</style>
