<template>
  <header class="relative px-4 py-3 w-full h-auto text-lg font-bold bg-gray-600 text-gray-300">
    <VirtueIcon
      class="absolute top-1 -left-12"
    />
    {{ attribute }}
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import VirtueIcon from '../VirtueIcon.vue'

import { VIRTUE_ATTRIBUTES } from '../../constants/virtue.constants'

const props = defineProps<{
  attribute: VIRTUE_ATTRIBUTES
}>()
</script>
