<template>
  <div class="flex items-center justify-center h-full">
    <div class="grid grid-cols-3 grid-rows-3 gap-8 transform rotate-45 w-max overflow-visible">
      <Square
        v-for="{color, virtue} in squares"
        :key="color"
        :color="color"
        :virtue="virtue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Square from '../components/Square.vue'
import { VIRTUES, VIRTUE_COLORS } from '../constants/virtue.constants'

const squares = reactive(Object.keys(VIRTUES).map((virtue) => ({
  color: VIRTUE_COLORS[virtue as VIRTUES],
  virtue: virtue as VIRTUES
})))
</script>
