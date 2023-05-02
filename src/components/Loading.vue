<template>
    <div class="loading position-fixed d-flex justify-content-center align-items-center w-100 h-100">
        <span class="circle"></span>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    .loading {
        z-index: 555555; 
        left: 0;
        top: 0;
        background-color: rgba(49, 49, 49, 0.705);
        .circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 15px solid transparent;
            border-top-color: transparent !important;
            animation: spin infinite linear 0.5s;
        }
    }
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
</style>
