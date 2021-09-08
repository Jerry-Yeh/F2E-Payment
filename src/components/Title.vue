<template>
  <div class="flex justify-center">
    <h3 class="title text-xl px-3">
      <div class="title__text tracking-widest font-bold">
        {{ title }}
      </div>
    </h3>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss">
.title {
  position: relative;
  &__text {
    position: relative;
    z-index: 2;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 17px;
    bottom: -5px;
    right: 0;
    content: '';
    background-color: #b5ffe4;
    z-index: 1;
  }
}
</style>
