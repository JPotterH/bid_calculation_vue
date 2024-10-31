<template>
    <div>
        <h1>Sign in / up</h1>
        <slot />
    </div>
</template>

<script>

import {lifecycleLoggerMixin} from "@/mixins/lifecycleLoggerMixin";

export default {
    name: "AppSignInLayout",
    mixins: [lifecycleLoggerMixin]
}
</script>

<style scoped>

</style>
