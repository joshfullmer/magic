<template>
  <header
    class="relative px-4 py-3 w-full h-auto text-lg font-bold"
    :class="`bg-${color}-400 text-${color}-800`"
  >
    <VirtueIcon
      class="absolute top-1 -left-12"
      :active-virtue="virtue"
    />
    {{ virtue }}
  </header>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

import VirtueIcon from '../VirtueIcon.vue'

import { VIRTUES, VIRTUE_COLORS } from '../../constants/virtue.constants'

const props = defineProps<{
  virtue: VIRTUES,
}>()

const color = ref(VIRTUE_COLORS[props.virtue])
</script>
