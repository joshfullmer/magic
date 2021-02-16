<template>
  <router-link :to="{ name: virtue }">
    <div
      class="w-40 h-40 flex items-center justify-center transition hover:ring-4 hover:shadow-2xl"
      :class="`bg-${color}-400 text-${color}-800 hover:ring-${color}-600`"
    >
      <span class="transform -rotate-45 font-mono text-2xl font-bold">{{ virtue }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

import { VIRTUES, VIRTUE_COLORS } from '../constants/virtue.constants'

const props = defineProps<{
    virtue: VIRTUES,
}>()

const color = ref(VIRTUE_COLORS[props.virtue])
</script>
