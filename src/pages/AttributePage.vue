<template>
  <InfoPageLayout>
    <AttributeHeader :attribute="attribute" />
    <AttributeDescription :attribute="attribute" />
    <AttributeValues :attribute="attribute" />
  </InfoPageLayout>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import InfoPageLayout from '../components/InfoPageLayout.vue'
import AttributeHeader from '../components/attribute/AttributeHeader.vue'
import AttributeDescription from '../components/attribute/AttributeDescription.vue'
import AttributeValues from '../components/attribute/AttributeValues.vue'

import { VIRTUE_ATTRIBUTES } from '../constants/virtue.constants'

const props = defineProps<{
  attribute: VIRTUE_ATTRIBUTES
}>()
</script>
