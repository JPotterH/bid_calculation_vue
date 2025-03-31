<template>
    <div>
        <HeaderComponent />
        <h2>Ooopss... We found an Error</h2>
        <slot></slot>
    </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>
