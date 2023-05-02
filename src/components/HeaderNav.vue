<template>
  <header class="py-4">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="mb-0 fw-bold fs-4">Where in the world?</h1>
      <transition name="slide-up" mode="out-in">
        <div v-if="mode === 'light'" class="dark-light-butn d-flex align-items-center gap-2"
          @click="$emit('change-mode')">
          <i class="fa-regular fa-moon"></i>
          <span class="fw-semibold">Dark Mode</span>
        </div>
        <div v-else class="dark-light-butn d-flex align-items-center gap-2" @click="$emit('change-mode')">
          <i class="fa-solid fa-moon"></i>
          <span class="fw-semibold">Light Mode</span>
        </div>
      </transition>
    </div>
  </header>
</template>
<script setup>

defineEmits(['change-mode'])
defineProps(['mode'])

</script>
<style lang="scss" scoped>
// Slide Up Animation 
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.2s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}


header {
  box-shadow: 0 2px 5px rgba(24, 24, 24, 0.137);
  transition: 0.2s;

  .dark-light-butn {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 15px !important;
    }
    .dark-light-butn {
      font-size: 15px;
    }
  }
}
</style>