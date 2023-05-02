<template>
    <div :class="`scroll-to-top-butn position-fixed d-flex align-items-center justify-content-center rounded-circle ${scrollButtonActive ? 'active' : ''}`"
        @click="scrollToTop">
        <span class="fs-4">&UpArrow;</span>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const scrollButtonActive = ref(false)

const scrollToTop = () => {
    window.scrollTo(top)
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 9000) {
        scrollButtonActive.value = true
    } else scrollButtonActive.value = false
})


</script>
<style lang="scss" scoped>
.scroll-to-top-butn {
    bottom: 25px;
    right: 25px;
    z-index: 95555;
    width: 50px;
    height: 50px;
    box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);
    transition: 0.2s;
    cursor: pointer;
    transform: translateX(150px);
    &.active {
        transform: translateX(0px);
    }
}
</style>