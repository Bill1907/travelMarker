<script setup lang="ts">
const { error } = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/login" });
</script>

<template>
  <div>{{ error }}</div>
  <button @click="handleError">clearError</button>
</template>
