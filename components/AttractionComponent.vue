<script setup lang="ts">
import { ItemType } from "~/types/ItemType";

const { item } = defineProps<{ item: ItemType }>();
</script>

<template>
  <div class="item">
    <img :src="item.coverimage" alt="" />
    <span>{{ item.name }}</span>
    <span>{{ item.detail }}</span>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.item img {
  width: 100%;
}
</style>
