<template>
  <div class="stepper flex justify-between items-center">
    <div
      class="stepper__item flex justify-center"
      :class="{
        'stepper__item--process': nowStep === 1,
        'stepper__item--completed': nowStep >= 2,
      }"
    >
      <div class="stepper__counter bg-primary text-white">
        1
      </div>
    </div>
    <div
      class="stepper__item flex justify-center"
      :class="{
        'stepper__item--process': nowStep === 2,
        'stepper__item--completed': nowStep === 3,
      }"
    >
      <div
        class="stepper__counter text-white"
        :class="{
          'bg-secondary': nowStep === 1,
          'bg-primary': nowStep >= 2,
        }"
      >
        2
      </div>
    </div>
    <div class="stepper__item flex justify-center">
      <div
        class="stepper__counter text-white"
        :class="{
          'bg-secondary-dark': nowStep === 1,
          'bg-secondary': nowStep === 2,
          'bg-primary': nowStep === 3,
        }"
      >
        3
      </div>
    </div>
  </div>
</template>

<script setup>
import {} from '@vue/runtime-core';

defineProps({
  nowStep: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss">
.stepper {
  width: 396px;
  height: 120px;
  &__item {
    position: relative;
    flex: 1;
    &::after {
      position: absolute;
      top: 50%;
      right: -50%;
      content: '';
      border-bottom: 3px solid #d8d8d8;
      width: 100%;
      z-index: 1;
    }
    &--process {
      &::after {
        border-bottom: 3px solid;
        border-image: linear-gradient(to right, #8defcb, #d8d8d8) 1;
      }
    }
    &--completed {
      &::after {
        border-bottom: 3px solid #8defcb;
      }
    }
    &:last-child {
      &::after {
        content: none;
      }
    }
  }
  &__counter {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    z-index: 3;
  }
}
</style>
