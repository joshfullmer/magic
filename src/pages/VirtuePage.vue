<template>
  <InfoPageLayout>
    <VirtueHeader :virtue="virtue" />
    <VirtueValues :virtue="virtue" />
  </InfoPageLayout>
</template>

<script setup lang="ts">
import InfoPageLayout from '../components/InfoPageLayout.vue'
import VirtueHeader from '../components/virtue/VirtueHeader.vue'
import VirtueValues from '../components/virtue/VirtueValues.vue'
import { VIRTUES } from '../constants/virtue.constants'
import { defineProps } from 'vue'

const props = defineProps<{
  virtue: VIRTUES,
}>()
</script>
