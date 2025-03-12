<template>
    <component :is="$route.meta.layoutComponent">
        <slot></slot>
    </component>
</template>
