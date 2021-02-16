<template>
  <main
    class="flex flex-col px-4 py-3"
    :class="`bg-${color}-200 text-${color}-800`"
  >
    <VirtueAttribute
      v-for="{title, text} in attributes"
      :key="title"
      :title="title"
      :text="text"
      :virtue="virtue"
    />
  </main>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref } from 'vue'

import { VIRTUES, VIRTUE_ATTRIBUTES, VIRTUE_COLORS, VIRTUE_DESCRIPTIONS } from '../../constants/virtue.constants'

import VirtueAttribute from './VirtueAttribute.vue'

const props = defineProps<{
  virtue: VIRTUES
}>()

const color = ref(VIRTUE_COLORS[props.virtue])

const attributes = reactive(Object.keys(VIRTUE_ATTRIBUTES).map((attribute) => ({
  title: attribute as VIRTUE_ATTRIBUTES,
  text: VIRTUE_DESCRIPTIONS[props.virtue][attribute as VIRTUE_ATTRIBUTES]
})))
</script>
