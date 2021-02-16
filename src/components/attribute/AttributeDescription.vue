<template>
  <section class="px-4 py-3 w-full bg-gray-400">
    This describes the purpose of the {{ attribute }} attribute
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import { VIRTUE_ATTRIBUTES } from '../../constants/virtue.constants'

const props = defineProps<{
  attribute: VIRTUE_ATTRIBUTES
}>()
</script>
