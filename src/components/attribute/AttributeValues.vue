<template>
  <main class="flex flex-col gap-4 px-4 py-3 border border-1 border-gray-400">
    <div
      v-for="{description, color, virtue} in descriptions"
      :key="virtue"
      class="flex"
    >
      <router-link
        class="px-4 py-3 font-semibold rounded-l"
        :class="`bg-${color}-400 text-${color}-800`"
        :to="{name: virtue}"
      >
        <span>
          {{ virtue }}
        </span>
      </router-link>
      <span
        class="flex-1 px-4 py-3 shadow-inner rounded-r"
        :class="`bg-${color}-200 text-${color}-800`"
      >
        {{ description }}
      </span>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineProps, reactive } from 'vue'

import { VIRTUES, VIRTUE_ATTRIBUTES, VIRTUE_DESCRIPTIONS } from '../../constants/virtue.constants'

const props = defineProps<{
  attribute: VIRTUE_ATTRIBUTES
}>()

const descriptions = reactive(Object.keys(VIRTUES)
  .map((virtue) => ({
    virtue,
    color: VIRTUE_DESCRIPTIONS[virtue as VIRTUES].Color,
    description: VIRTUE_DESCRIPTIONS[virtue as VIRTUES][props.attribute]
  })))
</script>
