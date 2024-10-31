<template>
    <div>
        <h1>App Default Layout</h1>
        <slot />
    </div>
</template>

<script>

import {lifecycleLoggerMixin} from "@/mixins/lifecycleLoggerMixin";

export default {
    name: "AppDefaultLayout",
    mixins: [lifecycleLoggerMixin]
}
</script>

<style scoped>

</style>
