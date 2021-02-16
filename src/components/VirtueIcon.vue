<template>
  <router-link to="/">
    <div class="m-2 grid grid-cols-3 grid-rows-3 gap-px w-max transform rotate-45">
      <div
        v-for="{ virtue, color } in colors"
        :key="virtue"
        class="h-2 w-2"
        :class="{
          [`bg-${color}-400`]: !activeVirtue || activeVirtue === virtue,
          [`bg-${activeVirtueColor}-100`]: activeVirtue && activeVirtue !== virtue
        }"
      />
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref } from 'vue'
import { VIRTUES, VIRTUE_COLORS } from '../constants/virtue.constants'

const props = defineProps<{
  activeVirtue?: VIRTUES
}>()

const colors = reactive(Object.entries(VIRTUE_COLORS).map(([virtue, color]) => ({ virtue, color })))
const activeVirtueColor = ref(props.activeVirtue ? VIRTUE_COLORS[props.activeVirtue] : '')
</script>
