<script setup lang="ts">
import AttractionComponent from "~/components/AttractionComponent";
import { useItemStore } from "~/stores/useItemStore";
import { useAuthCookie } from "~/composables/useAuth";

useHead({
  title: "Detail",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "detail page", content: "상세페이지 입니다." }],
});

const route = useRoute();
const itemStore = useItemStore();

definePageMeta({
  layout: "default",
  middleware: "auth",
});

itemStore.requestAttractionDetail(useAuthCookie().value, route.params.id);
</script>

<template>
  <NuxtLayout>
    <AttractionComponent
      v-if="itemStore.attraction"
      :item="itemStore.attraction"
    />
  </NuxtLayout>
</template>
