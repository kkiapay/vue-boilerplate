<script setup lang="ts">
import { ref } from "vue";
import { increment } from "../utils/functions";

const count = ref(0);
const updateCount = () => {
  count.value = increment(count.value);
};
</script>

<template>
  <button @click="updateCount">{{ count }}</button>
</template>
