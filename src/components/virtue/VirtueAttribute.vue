<template>
  <router-link
    :to="{ name: title }"
    class="pb-2"
  >
    <span class="font-semibold">{{ title }}</span>
  </router-link>

  <div
    class="border rounded p-2 mb-2 shadow-inner"
    :class="`border-${color}-600 bg-${color}-100`"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

import { VIRTUES, VIRTUE_COLORS } from '../../constants/virtue.constants'

const props = defineProps<{
  title: string,
  text: string,
  virtue: VIRTUES
}>()

const color = ref(VIRTUE_COLORS[props.virtue])
</script>
