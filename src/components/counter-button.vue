<script setup lang="ts">
import { ref } from "vue";
import { increment } from "../utils/functions";

const count = ref(0);
const updateCount = () => {
  count.value = increment(count.value);
};
</script>

<template>
  <button class="text-white bg-cyan-400 rounded py-1 px-3" @click="updateCount">
    {{ count }}
  </button>
</template>
